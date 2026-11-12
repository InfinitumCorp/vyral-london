import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import wordmark from "@/assets/wordmark.png";
import { CumulusBar } from "@/components/cumulus-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#practice", id: "practice", label: "Practice" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#method", id: "method", label: "Method" },
  { href: "#brief", id: "brief", label: "Brief" },
] as const;

function LondonClock() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).format(new Date());
    setLabel(format());
    const id = window.setInterval(() => setLabel(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="flex items-baseline gap-2 text-xs tracking-brand text-muted-foreground uppercase">
      <span>London</span>
      <time className="tabular-nums tracking-normal normal-case" dateTime={label ?? undefined}>
        {label ?? "--:--"}
      </time>
    </p>
  );
}

export function SiteHeader({ active }: { active: string | null }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-fast ease-smooth",
        solid || open ? "border-b border-border bg-background" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="#top" className="shrink-0" aria-label="VYRAL London, back to top">
          <img src={wordmark} alt="" className="h-6 w-auto md:h-7" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-quick ease-smooth",
                active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:block md:hidden lg:block">
            <LondonClock />
          </div>
          <a
            href="#brief"
            className="inline-flex h-11 items-center px-1 text-sm text-foreground md:hidden"
          >
            Brief
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#brief">Start a brief</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-border text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <CumulusBar className="hidden lg:flex" />
          <CumulusBar className="flex lg:hidden" create={false} />
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-30 bg-background md:hidden">
          <nav className="flex flex-col px-5 py-6" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="flex h-14 items-center border-b border-border font-display text-2xl tracking-display text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-8">
              <a href="#brief" onClick={() => setOpen(false)}>
                Start a brief
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
