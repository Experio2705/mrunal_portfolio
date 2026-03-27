export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold gradient-text">Mrunal Shinde</span>
        <span>© {new Date().getFullYear()} — Designed & built with 💙</span>
      </div>
    </footer>
  );
}
