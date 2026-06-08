"use client";

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-[100svh] bg-[#FDFBF7] text-[#292524]">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <div className="text-6xl font-bold text-[#E0DBD0]">Error</div>
          <h1 className="mt-4 text-xl font-semibold text-[#292524]">An unexpected error occurred</h1>
          <p className="mt-2 text-sm text-[#6B6355]">
            {error?.message ?? "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            className="mt-6 rounded-lg bg-[#78350F] px-4 py-2.5 text-sm font-semibold text-[#FDFBF7] hover:bg-[#451A03] transition-colors"
          >
            Attempt reconnection
          </button>
        </div>
      </body>
    </html>
  );
}
