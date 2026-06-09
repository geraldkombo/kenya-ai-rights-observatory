import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-cream/95 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="min-h-[44px] text-sm font-bold tracking-tight text-brand-brown no-underline transition-colors hover:text-brand-accent">
          Kenya AI &amp; Digital Rights Observatory
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-brand-stone" aria-label="Main navigation">
          <Link href="/method" className="min-h-[44px] transition-colors hover:text-brand-dark">
            Methodology
          </Link>
          <Link href="/compare" className="min-h-[44px] transition-colors hover:text-brand-dark">
            Compare
          </Link>
          <Link href="/brief?id=47" className="min-h-[44px] transition-colors hover:text-brand-dark">
            Brief
          </Link>
          <Link href="/dua" className="min-h-[44px] transition-colors hover:text-brand-dark">
            Data
          </Link>
        </nav>
      </div>
    </header>
  );
}
