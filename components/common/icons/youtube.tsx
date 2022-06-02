import * as React from "react";
import { theme } from "@styles/stitches";

const Youtube = ({ width = 24, fill = theme.colors.navy.value, ...props }) => (
  <svg
    viewBox="0 0 23 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "100%" }}
    {...props}
  >
    <path
      d="M22.096 5.70998C22.1454 4.27864 21.8324 2.858 21.186 1.57998C20.7474 1.05558 20.1387 0.701694 19.466 0.579984C16.6835 0.327509 13.8895 0.224028 11.096 0.269984C8.31262 0.221942 5.52868 0.322084 2.75597 0.569984C2.20779 0.669701 1.70049 0.926826 1.29597 1.30998C0.395974 2.13998 0.295974 3.55998 0.195974 4.75998C0.0508862 6.91755 0.0508862 9.08242 0.195974 11.24C0.224904 11.9154 0.325468 12.5858 0.495974 13.24C0.616549 13.745 0.860497 14.2123 1.20597 14.6C1.61324 15.0034 2.13236 15.2752 2.69597 15.38C4.85189 15.6461 7.02419 15.7564 9.19597 15.71C12.696 15.76 15.766 15.71 19.396 15.43C19.9734 15.3316 20.5072 15.0595 20.926 14.65C21.2059 14.3699 21.4151 14.0271 21.536 13.65C21.8936 12.5526 22.0693 11.4041 22.056 10.25C22.096 9.68998 22.096 6.30998 22.096 5.70998ZM8.83597 10.85V4.65998L14.756 7.76998C13.096 8.68998 10.906 9.72998 8.83597 10.85Z"
      fill={fill}
    />
  </svg>
);

export default Youtube;