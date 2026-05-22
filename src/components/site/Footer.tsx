export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Sharma Bazaar · Dadar West, Mumbai</p>
        <p className="text-background/60">Made with ❤️ for our local community</p>
      </div>
    </footer>
  );
}
