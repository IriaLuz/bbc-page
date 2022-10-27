import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  label: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary = true, label, ...buttonProps }: ButtonProps, ref) => {
    const buttonType = primary ? `button is-primary` : `button is-outlined`;
    return (
      <button
        {...buttonProps}
        ref={ref}
        className={buttonType}
        data-testid="icon-button"
      >
        {label}
      </button>
    );
  }
);
