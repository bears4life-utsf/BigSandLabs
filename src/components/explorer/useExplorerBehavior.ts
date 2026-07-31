"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  BLINK_DOUBLE_CHANCE,
  CLICK_COOLDOWN_MS,
  CLICK_SPECIALS,
  EXPLORER_SPECIALS,
  pickWeighted,
  randomBetween,
  type ExplorerBehaviorSpec,
} from "./behaviors";

export type UseExplorerBehaviorOptions = {
  /** When false, no scheduling or interaction (static). */
  enabled?: boolean;
};

export type UseExplorerBehaviorResult = {
  /** Pointer / keyboard activation — always runs one visible special. */
  onActivate: () => void;
};

const SPECIAL_CLASSES = [
  "is-blink",
  "is-blink-double",
  "is-compass",
  "is-glance",
  "is-weight",
  "is-hat-tilt",
] as const;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function wait(ms: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    const id = window.setTimeout(() => resolve(), ms);
    if (signal.cancelled) {
      window.clearTimeout(id);
      resolve();
    }
  });
}

/** Force CSS animation to restart when re-applying the same class. */
function restartClass(el: HTMLElement, className: string) {
  for (const name of SPECIAL_CLASSES) {
    el.classList.remove(name);
  }
  // Reflow so the next add() retriggers @keyframes
  void el.offsetWidth;
  el.classList.add(className);
}

/**
 * Coordinated Explorer behavior engine.
 * Breathing stays CSS-continuous; specials are mutex-scheduled with random gaps.
 * Clicks interrupt and always play one random special.
 */
export function useExplorerBehavior(
  rootRef: React.RefObject<HTMLElement | null>,
  options: UseExplorerBehaviorOptions = {},
): UseExplorerBehaviorResult {
  const { enabled = true } = options;
  const busyRef = useRef(false);
  const lastClickRef = useRef(0);
  const signalRef = useRef({ cancelled: false });
  const timersRef = useRef<number[]>([]);
  /** Bumps to cancel an in-flight special without tearing down the scheduler. */
  const runIdRef = useRef(0);

  const clearBehaviorClasses = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    for (const name of SPECIAL_CLASSES) {
      el.classList.remove(name);
    }
  }, [rootRef]);

  const onActivate = useCallback(() => {
    if (!enabled || prefersReducedMotion()) return;
    const now = Date.now();
    if (now - lastClickRef.current < CLICK_COOLDOWN_MS) return;
    lastClickRef.current = now;

    const el = rootRef.current;
    if (!el) return;

    // Interrupt whatever is playing so click feedback is immediate.
    const runId = ++runIdRef.current;
    busyRef.current = true;

    const pick = pickWeighted(CLICK_SPECIALS);
    restartClass(el, pick.className);

    void (async () => {
      await wait(pick.duration, signalRef.current);
      if (signalRef.current.cancelled || runId !== runIdRef.current) return;
      el.classList.remove(pick.className);
      busyRef.current = false;
    })();
  }, [enabled, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    signalRef.current = { cancelled: false };
    timersRef.current = [];
    busyRef.current = false;
    runIdRef.current = 0;

    if (!enabled || !root || prefersReducedMotion()) {
      root?.classList.remove("is-alive");
      clearBehaviorClasses();
      return;
    }

    root.classList.add("is-alive");

    const track = (id: number) => {
      timersRef.current.push(id);
    };

    const runSpecial = async (className: string, duration: number) => {
      if (!root || signalRef.current.cancelled) return;
      const runId = ++runIdRef.current;
      busyRef.current = true;
      restartClass(root, className);
      await wait(duration, signalRef.current);
      if (signalRef.current.cancelled || runId !== runIdRef.current) return;
      root.classList.remove(className);
      busyRef.current = false;
    };

    const runWhenIdle = async (className: string, duration: number) => {
      while (busyRef.current && !signalRef.current.cancelled) {
        await wait(180, signalRef.current);
      }
      if (signalRef.current.cancelled) return;
      await runSpecial(className, duration);
    };

    const scheduleSpecial = (spec: ExplorerBehaviorSpec) => {
      const delay = randomBetween(spec.minGap, spec.maxGap);
      const id = window.setTimeout(() => {
        void (async () => {
          if (signalRef.current.cancelled) return;

          let className = spec.className;
          let duration = spec.duration;
          if (spec.id === "blink" && Math.random() < BLINK_DOUBLE_CHANCE) {
            className = "is-blink-double";
            duration = 560;
          }

          await runWhenIdle(className, duration);
          if (!signalRef.current.cancelled) {
            scheduleSpecial(spec);
          }
        })();
      }, delay);
      track(id);
    };

    for (const spec of EXPLORER_SPECIALS) {
      scheduleSpecial(spec);
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (motionQuery.matches) {
        signalRef.current.cancelled = true;
        timersRef.current.forEach((tid) => window.clearTimeout(tid));
        timersRef.current = [];
        busyRef.current = false;
        clearBehaviorClasses();
        root.classList.remove("is-alive");
      }
    };
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      signalRef.current.cancelled = true;
      timersRef.current.forEach((tid) => window.clearTimeout(tid));
      timersRef.current = [];
      busyRef.current = false;
      clearBehaviorClasses();
      root.classList.remove("is-alive");
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, [enabled, rootRef, clearBehaviorClasses]);

  return { onActivate };
}
