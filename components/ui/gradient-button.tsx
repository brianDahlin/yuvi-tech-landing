'use client';

interface GradientButtonProps {
  children?: React.ReactNode;
  href?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function GradientButton({
  children,
  href,
  height = '48px',
  onClick,
  disabled = false,
  className = '',
}: GradientButtonProps) {
  const baseClass = `
    relative rounded-[50px] cursor-pointer
    after:content-[""] after:block after:absolute after:bg-[var(--color-background)]
    after:inset-[2px] after:rounded-[48px] after:z-[1]
    after:transition-opacity after:duration-300 after:ease-linear
    flex items-center justify-center px-8
    rotatingGradient
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
    ${className}
  `.trim();

  const style = {
    '--r': '0deg',
    height,
    minWidth: 'fit-content',
  } as React.CSSProperties;

  const inner = (
    <span className="relative z-10 text-white font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase whitespace-nowrap flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={baseClass}
        style={style}
        aria-disabled={disabled}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClass}
      style={style}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
