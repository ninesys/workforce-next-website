import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-dark">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-heading font-bold text-white/20">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-white">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button href="/" variant="white">
            Back to Home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
