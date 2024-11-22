import React from "react";
import { ButtonLinkProps } from "../types/props.types";

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, label }) => (
  <a
    href={href}
    className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
  >
    {label}
  </a>
);
