{/*type props {
  className?: string;
}*/}

export default function BanknoteIcon({ className = "",size = false }) {
  return (
    <div className={`${!size ? 'p-1.5':'p-1'} bg-blue-200 rounded-lg ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={!size ? '24':'16'}
        height={!size ? '24':'16'}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth='2'
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-banknote ${!size ? 'h-6 w-6':'h-4 w-4'} text-blue-900`}
      >
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    </div>
  );
}
