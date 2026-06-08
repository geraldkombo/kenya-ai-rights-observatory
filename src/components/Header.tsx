import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E0DBD0] bg-[#FDFBF7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-bold tracking-tight text-[#78350F] no-underline">
          Kenya AI &amp; Digital Rights Observatory
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-[#6B6355]" aria-label="Main navigation">
          <Link href="/method" className="hover:text-[#292524] transition-colors">
            Methodology
          </Link>
          <Link href="/compare" className="hover:text-[#292524] transition-colors">
            Compare
          </Link>
          <Link href="/brief?id=47" className="hover:text-[#292524] transition-colors">
            Brief
          </Link>
          <Link href="/dua" className="hover:text-[#292524] transition-colors">
            Data
          </Link>
        </nav>
      </div>
    </header>
  );
}
