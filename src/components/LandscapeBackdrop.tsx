/** Full-bleed landscape plane for the hero — sand, water, and ridge light. */
export function LandscapeBackdrop() {
  return (
    <div className="landscape-backdrop pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="landscape-sky" />
      <div className="landscape-water" />
      <div className="landscape-dune landscape-dune-far" />
      <div className="landscape-dune landscape-dune-near" />
      <div className="landscape-glow" />
      <div className="landscape-grain" />
      <svg
        className="landscape-ridges"
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ridge ridge-a"
          d="M-40 410C180 340 320 360 470 390C640 425 760 330 940 300C1120 270 1280 320 1500 280"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          className="ridge ridge-b"
          d="M-40 470C160 430 300 450 470 480C680 520 820 430 1000 410C1180 390 1320 430 1500 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          className="ridge ridge-c"
          d="M-40 530C200 500 340 520 520 545C740 575 900 510 1080 495C1240 482 1360 510 1500 490"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <circle className="ridge-sun" cx="1180" cy="168" r="53" />
      </svg>
    </div>
  );
}
