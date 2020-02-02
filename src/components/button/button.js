import React from "react";
import clsx from "clsx";
import "./button.css";

function Button({
  children,
  component: Component = "button",
  className,
  variant,
  ...props
}) {
  return (
    <Component
      className={clsx("button", { rounded: variant }, className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
