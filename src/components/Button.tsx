import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 font-medium rounded transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-[#0d6e6e] text-[#ffffff] hover:opacity-90 focus-visible:outline-[#0d6e6e] disabled:opacity-50 disabled:cursor-not-allowed',
    secondary:
      'bg-transparent border border-[#0d6e6e] text-[#0d6e6e] hover:bg-[#f0f9f9] focus-visible:outline-[#0d6e6e]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
