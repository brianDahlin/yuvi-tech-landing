export function YuViLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="YuVi Tech логотип"
    >
      <rect x="2"  y="2"  width="12" height="7" rx="1" fill="#E8622A" />
      <rect x="10" y="2"  width="20" height="7" rx="1" fill="#E8622A" />
      <rect x="2"  y="14" width="26" height="7" rx="1" fill="#E8622A" />
      <rect x="10" y="26" width="12" height="7" rx="1" fill="#E8622A" />
      <rect x="18" y="26" width="16" height="7" rx="1" fill="#E8622A" />
    </svg>
  )
}
