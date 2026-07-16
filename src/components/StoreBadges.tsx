export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-2 min-[390px]:grid-cols-2 sm:flex sm:w-auto sm:gap-3 ${className}`}
    >
      <a
        href="https://apps.apple.com/br/search?term=golnext"
        target="_blank"
        rel="noreferrer"
        aria-label="Baixar GolNext na App Store"
        className="flex h-[52px] w-full items-center gap-2 rounded-lg border border-white/30 bg-black px-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint sm:h-[56px] sm:w-[180px] sm:gap-2.5 sm:px-4"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0 fill-current sm:h-8 sm:w-8">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.1ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[7px] font-medium tracking-wide sm:text-[8px]">Download on the</span>
          <span className="sg mt-0.5 block whitespace-nowrap text-[14px] font-semibold tracking-tight sm:text-[18px]">App Store</span>
        </span>
      </a>

      <a
        href="https://play.google.com/store/search?q=golnext&amp;c=apps"
        target="_blank"
        rel="noreferrer"
        aria-label="Baixar GolNext no Google Play"
        className="flex h-[52px] w-full items-center gap-2 rounded-lg border border-white/30 bg-black px-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint sm:h-[56px] sm:w-[190px] sm:gap-2.5 sm:px-4"
      >
        <svg viewBox="0 0 28 31" aria-hidden="true" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8">
          <path fill="#00d7fe" d="M1.8 1.2A3 3 0 0 0 .6 3.7v23.6a3 3 0 0 0 1.2 2.5l14-14.3L1.8 1.2Z" />
          <path fill="#ffce00" d="m16.8 16.5-3.5 3.6L2.6 30.7c.8.2 1.7.1 2.6-.4l16.2-9.2-4.6-4.6Z" />
          <path fill="#ff3a44" d="m21.4 9.9-16.2-9.2A3.5 3.5 0 0 0 2.6.3l10.7 10.6 3.5 3.6 4.6-4.6Z" />
          <path fill="#00f076" d="m26 12.5-4.6-2.6-4.6 4.6 4.6 4.6 4.6-2.6c1.9-1.1 1.9-2.9 0-4Z" />
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[7px] font-medium uppercase tracking-[0.08em] sm:text-[8px]">Get it on</span>
          <span className="sg mt-0.5 block whitespace-nowrap text-[13px] font-semibold tracking-tight sm:text-[17px]">Google Play</span>
        </span>
      </a>
    </div>
  );
}
