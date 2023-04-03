import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface ButtonProps extends React.PropsWithChildren {
  title: string;
  to: Url;
  onClick?: MouseEventHandler;
}
const Button: React.FC<ButtonProps> = ({ title, to, onClick }): JSX.Element => {
  return (
    <Link
      onClick={onClick}
      href={to}
      className="block w-fit rounded bg-light-accent py-[10px] px-5 font-semibold text-light-primary dark:bg-dark-accent dark:text-dark-primary"
    >
      {title}
    </Link>
  );
};

export default Button;
