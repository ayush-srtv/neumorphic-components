import React from "react";
import clsx from "clsx";
import "./button.css";

function Button({
  children,
  component: Component = "button",
  className,
  ...props
}) {
  return (
    <Component className={clsx("button", className)} {...props}>
      {children}
    </Component>
  );
}

export default Button;
