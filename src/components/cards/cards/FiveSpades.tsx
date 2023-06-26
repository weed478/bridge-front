function FiveSpades({
  className,
  background,
  fill,
}: {
  className?: string;
  background: string;
  fill: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    >
      <defs>
        <symbol
          id="SS5"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
            fill={fill}
          ></path>
        </symbol>
        <symbol
          id="VS5"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M170 -460L-175 -460L-210 -115C-210 -115 -200 -200 0 -200C100 -200 255 -80 255 120C255 320 180 460 -20 460C-220 460 -255 285 -255 285"
            stroke="#e3e3e3"
            strokeWidth="80"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            fill="none"
          ></path>
        </symbol>
      </defs>
      <rect
        width="211"
        height="328"
        x="-105.5"
        y="-164"
        rx="19"
        ry="19"
        fill={background}
      ></rect>
      <use xlinkHref="#VS5" height="32" width="32" x="-100.4" y="-145.5"></use>
      <use
        xlinkHref="#SS5"
        height="26.769"
        width="26.769"
        x="-97.784"
        y="-108.5"
      ></use>
      <use
        xlinkHref="#SS5"
        height="54"
        width="54"
        x="-72.167"
        y="-130.667"
      ></use>
      <use
        xlinkHref="#SS5"
        height="54"
        width="54"
        x="18.167"
        y="-130.667"
      ></use>
      <use xlinkHref="#SS5" height="54" width="54" x="-27" y="-27"></use>
      <g transform="rotate(180)">
        <use
          xlinkHref="#VS5"
          height="32"
          width="32"
          x="-100.4"
          y="-145.5"
        ></use>
        <use
          xlinkHref="#SS5"
          height="26.769"
          width="26.769"
          x="-97.784"
          y="-108.5"
        ></use>
        <use
          xlinkHref="#SS5"
          height="54"
          width="54"
          x="-72.167"
          y="-130.667"
        ></use>
        <use
          xlinkHref="#SS5"
          height="54"
          width="54"
          x="18.167"
          y="-130.667"
        ></use>
      </g>
    </svg>
  );
}

export default FiveSpades;
