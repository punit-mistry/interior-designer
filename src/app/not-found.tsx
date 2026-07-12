import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,162,107,0.06)_0%,transparent_70%)]" />
      <span className="font-display text-[12rem] leading-none text-charcoal/5 sm:text-[16rem]">
        404
      </span>
      <div className="-mt-16 sm:-mt-24">
        <h1 className="font-display text-4xl text-charcoal sm:text-5xl">
          Space not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-stone">
          The page you&apos;re looking for doesn&apos;t exist or has been
          relocated. Let&apos;s get you back to familiar ground.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border border-gold px-10 py-4 font-body text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
