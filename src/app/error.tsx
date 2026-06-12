"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkError = error?.message?.includes("chunk") || error?.message?.includes("Loading");
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="text-6xl font-bold text-brand-border">Error</div>
      <h1 className="mt-4 text-xl font-semibold text-brand-dark">
        {isChunkError ? "This page needs a fresh start" : "Something went wrong"}
      </h1>
      <p className="mt-2 text-sm text-brand-stone">
        {isChunkError
          ? "A newer version of this page was just published. Your browser loaded an older copy that is no longer available."
          : "An unexpected error occurred while loading this page."}
      </p>
      <p className="mt-1 text-xs text-brand-muted">
        {isChunkError ? "This is normal after a platform update." : ""}
      </p>
      <button
        onClick={() => { if ("serviceWorker" in navigator) { navigator.serviceWorker.getRegistration().then(r => r?.unregister()); } reset(); }}
        className="mt-6 min-h-[44px] rounded-lg bg-brand-brown px-6 py-2.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-accent"
      >
        Reload page
      </button>
    </div>
  );
}
