import { ChevronDown } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { z } from "zod";
import hero from "@/assets/hero.jpg";
import lockup from "@/assets/lockup.png";
import { SiteHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/field";
import { engagements, method, practices, ticker, type PracticeId } from "@/lib/content";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  organisation: z.string().trim().min(2, "Add an organisation, or write Independent."),
  email: z.string().trim().email("That email does not look right."),
});

function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden="true">
      <div
        className="h-full origin-left bg-foreground"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = ["practice", "work", "method", "brief"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-background" aria-label="VYRAL London">
      <img
        src={hero}
        alt="Night view of London across the Thames, with Tower Bridge and the City skyline, carrying the VYRAL London public relations wordmark."
        className="hero-frame absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 mx-auto hidden max-w-6xl justify-end px-8 pb-10 md:flex">
        <div className="rise flex gap-3">
          <Button asChild>
            <a href="#brief">Start a brief</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#practice">The practice</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const loop = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-4" aria-hidden="true">
      <div className="marquee-track gap-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs tracking-brand text-muted-foreground uppercase"
          >
            {item}
            <span className="mx-10 text-border">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Practice({
  selected,
  onSelect,
  onDiscuss,
}: {
  selected: PracticeId;
  onSelect: (id: PracticeId) => void;
  onDiscuss: (id: PracticeId) => void;
}) {
  const current = practices.find((item) => item.id === selected) ?? practices[0];

  return (
    <section id="practice" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-xs tracking-brand text-muted-foreground uppercase">The practice</p>
          <h2 className="mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl">
            Four ways the work arrives.
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-border" role="list">
            {practices.map((item) => {
              const isOn = item.id === current.id;
              return (
                <div key={item.id} role="listitem" className="border-b border-border">
                  <button
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => onSelect(item.id)}
                    className="flex w-full items-baseline gap-4 py-5 text-left"
                  >
                    <span className="w-8 text-xs tabular-nums text-muted-foreground">{item.index}</span>
                    <span
                      className={cn(
                        "font-display text-2xl tracking-display transition-colors duration-quick ease-smooth md:text-3xl",
                        isOn ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          <div key={current.id} className="swap-in mt-8 max-w-xl">
            <p className="font-display text-xl tracking-display text-foreground">{current.line}</p>
            <p className="mt-4 text-base leading-body text-pretty text-muted-foreground">{current.body}</p>
            <Button className="mt-8" variant="outline" onClick={() => onDiscuss(current.id)}>
              Discuss {current.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [open, setOpen] = useState<string | null>(engagements[0].index);

  return (
    <section id="work" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs tracking-brand text-muted-foreground uppercase">The shape of the work</p>
          <h2 className="mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl">
            Not a client list. A way of holding a story.
          </h2>
          <p className="mt-5 max-w-prose text-pretty leading-body text-muted-foreground">
            Four kinds of engagement. The names are the work, not a roster — so you can feel the pace before
            we speak.
          </p>
        </div>
        <div className="mt-12 border-t border-border">
          {engagements.map((item) => {
            const isOpen = open === item.index;
            const panelId = `work-${item.index}`;
            return (
              <article key={item.index} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : item.index)}
                    className="flex w-full items-center gap-4 py-6 text-left md:gap-8"
                  >
                    <span className="w-8 shrink-0 text-xs tabular-nums text-muted-foreground">
                      {item.index}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl tracking-display md:text-3xl">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{item.meta}</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 transition-transform duration-fast ease-smooth",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="fold"
                  data-open={isOpen}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="fold-inner">
                    <div className="grid gap-3 pb-8 pl-12 md:max-w-2xl md:pl-16">
                      <p className="text-foreground">{item.summary}</p>
                      <p className="text-pretty leading-body text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const [active, setActive] = useState(0);
  const step = method[active] ?? method[0];

  return (
    <section id="method" className="scroll-mt-24 border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs tracking-brand text-muted-foreground uppercase">Method</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl">
          Listen. Frame. Place. Hold.
        </h2>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Method">
          {method.map((item, index) => {
            const isOn = index === active;
            return (
              <button
                key={item.index}
                type="button"
                role="tab"
                aria-selected={isOn}
                onClick={() => setActive(index)}
                className={cn(
                  "flex min-h-28 flex-col items-start gap-3 bg-card p-5 text-left transition-colors duration-quick ease-smooth",
                  isOn ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="text-xs tabular-nums tracking-brand">{item.index}</span>
                <span className="font-display text-2xl tracking-display">{item.title}</span>
              </button>
            );
          })}
        </div>
        <p key={step.index} className="swap-in mt-8 max-w-prose text-lg leading-body text-pretty text-foreground">
          {step.body}
        </p>
      </div>
    </section>
  );
}

function Brief({
  request,
}: {
  request: { id: PracticeId; n: number } | null;
}) {
  const formId = useId();
  const [step, setStep] = useState(0);
  const [practice, setPractice] = useState<PracticeId | null>(null);
  const [ambition, setAmbition] = useState("");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!request) return;
    setPractice(request.id);
    setStep(0);
    setDone(false);
    setErrors({});
  }, [request]);

  const chosen = practices.find((item) => item.id === practice);

  function nextFromPractice() {
    if (!practice) {
      setErrors({ practice: "Choose who we are speaking for." });
      return;
    }
    setErrors({});
    setStep(1);
  }

  function nextFromAmbition() {
    const value = ambition.trim();
    if (value.length < 12) {
      setErrors({ ambition: "A sentence is enough — just a little more than a word." });
      return;
    }
    setErrors({});
    setStep(2);
  }

  function submit() {
    const parsed = contactSchema.safeParse({ name, organisation, email });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  }

  function reset() {
    setStep(0);
    setPractice(null);
    setAmbition("");
    setName("");
    setOrganisation("");
    setEmail("");
    setErrors({});
    setDone(false);
  }

  return (
    <section id="brief" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs tracking-brand text-muted-foreground uppercase">A brief</p>
          <h2 className="mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl">
            Tell us who we are speaking for.
          </h2>
          <p className="mt-5 max-w-prose text-pretty leading-body text-muted-foreground">
            A short note is enough. We read every brief in London and reply within two working days.
          </p>
        </div>

        <div className="border border-border bg-card p-6 md:col-span-7 md:p-8">
          {done && chosen ? (
            <div className="swap-in">
              <p className="text-xs tracking-brand text-muted-foreground uppercase">Received</p>
              <h3 className="mt-4 font-display text-3xl tracking-display text-balance">
                We have your {chosen.title} brief, {name.trim()}.
              </h3>
              <p className="mt-4 leading-body text-muted-foreground">
                {organisation.trim()} · {email.trim()}. A short note is how every engagement here begins.
              </p>
              <Button className="mt-8" variant="outline" onClick={reset}>
                Write another
              </Button>
            </div>
          ) : (
            <form
              id={formId}
              onSubmit={(event) => {
                event.preventDefault();
                if (step === 0) nextFromPractice();
                else if (step === 1) nextFromAmbition();
                else submit();
              }}
              noValidate
            >
              <p className="text-xs tabular-nums tracking-brand text-muted-foreground uppercase">
                0{step + 1} / 03
              </p>

              {step === 0 && (
                <fieldset className="swap-in mt-6">
                  <legend className="font-display text-2xl tracking-display">Who is this for?</legend>
                  <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
                    {practices.map((item) => {
                      const isOn = practice === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          aria-pressed={isOn}
                          onClick={() => {
                            setPractice(item.id);
                            setErrors({});
                          }}
                          className={cn(
                            "min-h-16 bg-card px-4 py-4 text-left font-display text-xl tracking-display transition-colors duration-quick ease-smooth",
                            isOn ? "bg-foreground text-background" : "text-foreground hover:bg-secondary",
                          )}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                  <FieldError id="practice-error">{errors.practice}</FieldError>
                </fieldset>
              )}

              {step === 1 && (
                <div className="swap-in mt-6 flex flex-col gap-3">
                  <Label htmlFor={`${formId}-ambition`}>What should the world feel?</Label>
                  <Textarea
                    id={`${formId}-ambition`}
                    name="ambition"
                    value={ambition}
                    onChange={(event) => setAmbition(event.target.value)}
                    placeholder="The sentence you want the work to leave behind."
                    aria-invalid={Boolean(errors.ambition)}
                    aria-describedby={errors.ambition ? "ambition-error" : undefined}
                  />
                  <FieldError id="ambition-error">{errors.ambition}</FieldError>
                </div>
              )}

              {step === 2 && (
                <div className="swap-in mt-6 grid gap-5">
                  {chosen && (
                    <p className="text-sm text-muted-foreground">
                      {chosen.title}
                      {ambition.trim() ? ` — ${ambition.trim()}` : ""}
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`${formId}-name`}>Name</Label>
                    <Input
                      id={`${formId}-name`}
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <FieldError id="name-error">{errors.name}</FieldError>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`${formId}-org`}>Organisation</Label>
                    <Input
                      id={`${formId}-org`}
                      name="organisation"
                      autoComplete="organization"
                      value={organisation}
                      onChange={(event) => setOrganisation(event.target.value)}
                      aria-invalid={Boolean(errors.organisation)}
                      aria-describedby={errors.organisation ? "org-error" : undefined}
                    />
                    <FieldError id="org-error">{errors.organisation}</FieldError>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`${formId}-email`}>Email</Label>
                    <Input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <FieldError id="email-error">{errors.email}</FieldError>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {step > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setErrors({});
                      setStep((value) => value - 1);
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button type="submit">{step === 2 ? "Send the brief" : "Continue"}</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <img src={lockup} alt="VYRAL London Public Relations" className="h-auto w-56" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <a href="#top" className="text-foreground hover:underline">
            Back to top
          </a>
          <p>By appointment, London.</p>
          <p>People · Brands · Culture · Global impact</p>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  const active = useActiveSection();
  const [selected, setSelected] = useState<PracticeId>("people");
  const [request, setRequest] = useState<{ id: PracticeId; n: number } | null>(null);

  function discuss(id: PracticeId) {
    setSelected(id);
    setRequest({ id, n: Date.now() });
    document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="top" className="bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader active={active} />
      <main>
        <Hero />
        <Ticker />
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <h2 className="font-display text-4xl leading-display font-semibold tracking-display text-balance md:col-span-7 md:text-6xl">
              Reputation, placed with intent.
            </h2>
            <p className="self-end text-pretty leading-body text-muted-foreground md:col-span-5">
              Public relations for people, brands and culture that should be felt — not merely seen. From a
              Mayfair room to a wire that crosses markets, the task is the same: say the right thing, in the
              right room, and let it travel.
            </p>
          </div>
        </section>
        <Practice selected={selected} onSelect={setSelected} onDiscuss={discuss} />
        <Work />
        <Method />
        <Brief request={request} />
      </main>
      <Footer />
    </div>
  );
}
