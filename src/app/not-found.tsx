import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl font-bold text-[#E0DBD0]">404</div>
      <h1 className="mt-4 text-xl font-semibold text-[#292524]">Resource not found</h1>
      <p className="mt-2 text-sm text-[#6B6355]">The requested document does not exist or has been relocated.</p>
      <Link href="/" className="mt-6 rounded-lg bg-[#78350F] px-4 py-2.5 text-sm font-semibold text-[#FDFBF7] hover:bg-[#451A03] transition-colors">
        Return to map
      </Link>
    </div>
  );
}
