'use client';

import { forwardRef } from 'react';

type NavTriggerProps = {
  label: string;
  isActive: boolean;
  isOpen: boolean;
  controls: string;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const NavTrigger = forwardRef<HTMLButtonElement, NavTriggerProps>(
  function NavTrigger(
    { label, isActive, isOpen, controls, onClick, onKeyDown, className },
    ref
  ) {
    return (
      <button
        ref={ref}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={controls}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={`
        appearance-none bg-transparent border-0 p-0 m-0
        font-inherit text-inherit leading-inherit
        ${className}
        ${isActive ? 'is-active' : ''}
      `}
      >
        {label}
      </button>
    );
  }
);
