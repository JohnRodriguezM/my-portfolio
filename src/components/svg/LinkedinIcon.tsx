import React from "react";
import type { FC } from "react";
import type { IconProps } from "./type";

export const LinkedinIcon: FC<IconProps> = ({ className, ...props}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M25 2C12.318 2 2 12.317 2 25s10.318 23 23 23 23-10.317 23-23S37.682 2 25 2zm-7 33h-4V20h4v15zm-2-18a2 2 0 11-.001-3.999A2 2 0 0116 17zm21 18h-4v-7.5c0-1.925-1.575-3.5-3.5-3.5S26 25.575 26 27.5V35h-4V20h4v1.816A6.476 6.476 0 0130.5 20a6.5 6.5 0 016.5 6.5V35z" />
    </svg>
  )
}
