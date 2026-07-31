"use client";

import { useEffect, useRef, useState } from "react";

type Behavior =
  | "idle"
  | "walk"
  | "look"
  | "scratch"
  | "wave"
  | "sit"
  | "sun"
  | "turn"
  | "hide";

type Point = { x: number; y: number };

const DESKTOP_REGION = { xMin: 58, xMax: 90, yMin: 6, yMax: 17 };
const MOBILE_REGION = { xMin: 22, xMax: 78, yMin: 2.5, yMax: 9 };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 639px)").matches;
}

function region() {
  return isMobileViewport() ? MOBILE_REGION : DESKTOP_REGION;
}

function clampToRegion(point: Point): Point {
  const r = region();
  return {
    x: Math.min(r.xMax, Math.max(r.xMin, point.x)),
    y: Math.min(r.yMax, Math.max(r.yMin, point.y)),
  };
}

function randomInRegion(): Point {
  const r = region();
  return {
    x: r.xMin + Math.random() * (r.xMax - r.xMin),
    y: r.yMin + Math.random() * (r.yMax - r.yMin),
  };
}

function nearbyPoint(from: Point, maxStep = 8): Point {
  const angle = Math.random() * Math.PI * 2;
  const distance = 2.5 + Math.random() * maxStep;
  return clampToRegion({
    x: from.x + Math.cos(angle) * distance,
    y: from.y + Math.sin(angle) * distance * 0.45,
  });
}

function wait(ms: number, signal: { cancelled: boolean; timers: number[] }) {
  return new Promise<void>((resolve) => {
    const id = window.setTimeout(() => resolve(), ms);
    signal.timers.push(id);
  });
}

function pickBehavior(previous: Behavior): Behavior {
  const pool: Behavior[] = [
    "walk",
    "walk",
    "idle",
    "look",
    "scratch",
    "wave",
    "sit",
    "sun",
    "turn",
    "hide",
  ];
  let next = pool[Math.floor(Math.random() * pool.length)] ?? "idle";
  if (next === previous && Math.random() < 0.55) {
    next = pool[Math.floor(Math.random() * pool.length)] ?? "walk";
  }
  return next;
}

/**
 * A quiet stick figure that wanders the sand — not a mascot, a landscape detail.
 * Force visible immediately with ?living=dweller
 */
export function StickFigureDweller() {
  const [ready, setReady] = useState(false);
  const [pos, setPos] = useState<Point>({ x: 74, y: 11 });
  const [facing, setFacing] = useState(1);
  const [behavior, setBehavior] = useState<Behavior>("idle");
  const posRef = useRef(pos);
  const rafRef = useRef(0);

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const signal = { cancelled: false, timers: [] as number[] };
    const forced =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("living") === "dweller";
    const startDelay = forced ? 400 : 4500 + Math.floor(Math.random() * 3500);

    const boot = window.setTimeout(() => {
      if (signal.cancelled || prefersReducedMotion()) return;
      const start = randomInRegion();
      posRef.current = start;
      setPos(start);
      setReady(true);
      void runLife();
    }, startDelay);
    signal.timers.push(boot);

    async function runLife() {
      let previous: Behavior = "idle";
      while (!signal.cancelled) {
        const next = pickBehavior(previous);
        previous = next;
        await perform(next);
      }
    }

    async function perform(next: Behavior) {
      if (signal.cancelled) return;

      switch (next) {
        case "walk": {
          const target = nearbyPoint(posRef.current, 7 + Math.random() * 5);
          await walkTo(target);
          break;
        }
        case "idle":
          setBehavior("idle");
          await wait(900 + Math.random() * 1800, signal);
          break;
        case "look":
          setBehavior("look");
          await wait(700, signal);
          setFacing((f) => -f);
          await wait(900 + Math.random() * 700, signal);
          break;
        case "scratch":
          setBehavior("scratch");
          await wait(1200 + Math.random() * 600, signal);
          setBehavior("idle");
          break;
        case "wave":
          setBehavior("wave");
          await wait(1400 + Math.random() * 500, signal);
          setBehavior("idle");
          break;
        case "sit":
          setBehavior("sit");
          await wait(1800 + Math.random() * 1600, signal);
          setBehavior("idle");
          await wait(400, signal);
          break;
        case "sun":
          setFacing(1);
          setBehavior("sun");
          await wait(1400 + Math.random() * 1000, signal);
          setBehavior("idle");
          break;
        case "turn":
          setBehavior("turn");
          setFacing((f) => -f);
          await wait(500, signal);
          setBehavior("idle");
          break;
        case "hide": {
          setBehavior("hide");
          await wait(1100 + Math.random() * 900, signal);
          if (signal.cancelled) return;
          const reappear = nearbyPoint(posRef.current, 10);
          posRef.current = reappear;
          setPos(reappear);
          setFacing(Math.random() < 0.5 ? 1 : -1);
          setBehavior("idle");
          await wait(500, signal);
          break;
        }
      }
    }

    function walkTo(target: Point) {
      return new Promise<void>((resolve) => {
        if (signal.cancelled) {
          resolve();
          return;
        }
        const start = { ...posRef.current };
        const dx = target.x - start.x;
        if (Math.abs(dx) > 0.4) {
          setFacing(dx > 0 ? 1 : -1);
        }
        setBehavior("walk");
        const distance = Math.hypot(dx, target.y - start.y);
        const duration = Math.max(1600, distance * 220);
        const t0 = performance.now();

        const frame = (now: number) => {
          if (signal.cancelled) {
            resolve();
            return;
          }
          const t = Math.min(1, (now - t0) / duration);
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          const nextPoint = {
            x: start.x + (target.x - start.x) * eased,
            y: start.y + (target.y - start.y) * eased,
          };
          posRef.current = nextPoint;
          setPos(nextPoint);
          if (t < 1) {
            rafRef.current = requestAnimationFrame(frame);
          } else {
            setBehavior("idle");
            resolve();
          }
        };

        rafRef.current = requestAnimationFrame(frame);
      });
    }

    return () => {
      signal.cancelled = true;
      signal.timers.forEach((id) => window.clearTimeout(id));
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!ready) return null;

  return (
    <div
      className={`stick-dweller is-${behavior}`}
      style={{
        left: `${pos.x}%`,
        bottom: `${pos.y}%`,
        transform: `translateX(-50%) scaleX(${facing})`,
      }}
      aria-hidden="true"
    >
      <svg
        className="stick-dweller-svg"
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse className="stick-shadow" cx="12" cy="38.5" rx="4.5" ry="1" />
        <g className="stick-body">
          <circle className="stick-head" cx="12" cy="5.5" r="3.1" />
          <path className="stick-torso" d="M12 8.8V22" />
          <path className="stick-arm stick-arm-l" d="M12 11.5 L6.5 17" />
          <path className="stick-arm stick-arm-r" d="M12 11.5 L17.5 17" />
          <path className="stick-leg stick-leg-l" d="M12 22 L8 34.5" />
          <path className="stick-leg stick-leg-r" d="M12 22 L16 34.5" />
        </g>
      </svg>
    </div>
  );
}
