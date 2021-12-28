import clsx from 'clsx';
import React from 'react';

type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: HTMLButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={clsx(
        className,
        'bg-primary-sky text-white text-sm px-3 py-1 rounded hover:bg-primary-sky/80 transition-all'
      )}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
