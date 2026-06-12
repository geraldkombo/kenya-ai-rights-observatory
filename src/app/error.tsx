"use client";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkError = error?.message?.includes("chunk") || error?.message?.includes("Loading");

  useEffect(() => {
    if (!isChunkError) return;
    const timer = setTimeout(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistration().then(r => { if (r) r.unregister(); });
      }
      window.location.reload();
    }, 1500);
    return () => clearTimeout(timer);
  }, [isChunkError]);

  if (isChunkError) {
    return (
      <div className="mx-auto flex min-h-[50svh] max-w-2xl flex-col items-center justify-center px-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-border border-t-brand-orange" />
        <p className="mt-4 text-sm text-brand-stone">Loading latest version of this page...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="text-6xl font-bold text-brand-border">Error</div>
      <h1 className="mt-4 text-xl font-semibold text-brand-dark">Something went wrong</h1>
      <p className="mt-2 text-sm text-brand-stone">An unexpected error occurred while loading this page.</p>
      <button
        onClick={() => reset()}
        className="mt-6 min-h-[44px] rounded-lg bg-brand-brown px-6 py-2.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-accent"
      >
        Try again
      </button>
    </div>
  );
}
