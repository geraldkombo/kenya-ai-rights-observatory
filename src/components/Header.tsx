"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-cream/95 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="min-h-[44px] text-sm font-bold tracking-tight text-brand-brown no-underline transition-colors hover:text-brand-accent">
          Kenya AI &amp; Digital Rights Observatory
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm font-medium text-brand-stone sm:flex" aria-label="Main navigation">
          <Link href="/explore" className="min-h-[44px] transition-colors hover:text-brand-dark">Explore</Link>
          <Link href="/method" className="min-h-[44px] transition-colors hover:text-brand-dark">Methodology</Link>
          <Link href="/compare" className="min-h-[44px] transition-colors hover:text-brand-dark">Compare</Link>
          <Link href="/brief?id=47" className="min-h-[44px] transition-colors hover:text-brand-dark">Brief</Link>
          <Link href="/advocacy" className="min-h-[44px] transition-colors hover:text-brand-dark">Act</Link>
          <Link href="/dua" className="min-h-[44px] transition-colors hover:text-brand-dark">Data</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="min-h-[44px] inline-flex items-center justify-center rounded p-2 text-brand-stone transition-colors hover:bg-brand-bg sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-brand-border bg-brand-cream px-4 pb-4 pt-2 text-sm font-medium text-brand-stone sm:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            <Link href="/explore" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Explore</Link>
            <Link href="/method" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Methodology</Link>
            <Link href="/compare" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Compare</Link>
            <Link href="/brief?id=47" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Brief</Link>
            <Link href="/advocacy" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Act</Link>
            <Link href="/dua" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center rounded px-3 transition-colors hover:bg-brand-bg hover:text-brand-dark">Data</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
