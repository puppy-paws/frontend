import { MouseEventHandler } from "react";
import * as styles from "./_style/header.css";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  url: string;
  isActive?: boolean;
}

export default function LinkButton({
  text,
  onClick,
  url,
  isActive,
}: ButtonProps) {
  let className = styles.menuStyle;

  if (isActive !== undefined) {
    className = isActive ? styles.activeLinkString : styles.linkString;
  }

  return (
    <button className={className} onClick={onClick} data-url={url}>
      {text}
    </button>
  );
}
