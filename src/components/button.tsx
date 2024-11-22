import React from "react";
import { ButtonProps } from "../types/props.types";

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  label,
  disabled,
}) => (
  <button
    className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white disabled:bg-blue-500"
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
