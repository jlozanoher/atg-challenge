import React from "react";
import { CSSProperties } from "styled-components";
import "./styles.css";

interface Props {
  style?: CSSProperties;
}

export const Spinner = ({ style = { width: "24px" } }: Props) => {
  return (
    <svg
      className="loader"
      viewBox="0 0 24 24"
      name="loader"
      data-testid="loader"
      style={style}
    >
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
    </svg>
  );
};
