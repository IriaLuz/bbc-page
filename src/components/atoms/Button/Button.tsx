import React from "react";

type ButtonProps = {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  tabIndex?: number;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { primary = true, label, disabled = false, onClick, tabIndex }: ButtonProps,
    ref
  ) => {
    const buttonType = primary
      ? `button  is-rounded is-primary`
      : `button  is-rounded is-outline`;
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={buttonType}
        data-testid="icon-button"
        tabIndex={tabIndex}
      >
        {label}
      </button>
    );
  }
);
