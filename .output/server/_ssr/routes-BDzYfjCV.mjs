import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronDown, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BDzYfjCV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-Cs9_robp.jpg";
var lockup_default = "/assets/lockup-DvFmTXjX.png";
var wordmark_default = "/assets/wordmark-B-W13INr.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[transform,background-color,color,border-color,opacity] duration-quick ease-smooth active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			outline: "border border-foreground/30 bg-background/80 text-foreground hover:border-foreground hover:bg-background",
			ghost: "bg-transparent text-foreground hover:bg-secondary"
		},
		size: {
			default: "h-12 px-6 text-sm",
			sm: "h-11 px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		type: asChild ? void 0 : type ?? "button",
		...props
	});
}
var links = [
	{
		href: "#practice",
		id: "practice",
		label: "Practice"
	},
	{
		href: "#work",
		id: "work",
		label: "Work"
	},
	{
		href: "#method",
		id: "method",
		label: "Method"
	},
	{
		href: "#brief",
		id: "brief",
		label: "Brief"
	}
];
function LondonClock() {
	const [label, setLabel] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const format = () => new Intl.DateTimeFormat("en-GB", {
			timeZone: "Europe/London",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		}).format(/* @__PURE__ */ new Date());
		setLabel(format());
		const id = window.setInterval(() => setLabel(format()), 3e4);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-baseline gap-2 text-xs tracking-brand text-muted-foreground uppercase",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "London" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
			className: "tabular-nums tracking-normal normal-case",
			dateTime: label ?? void 0,
			children: label ?? "--:--"
		})]
	});
}
function SiteHeader({ active }) {
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-fast ease-smooth", solid || open ? "border-b border-border bg-background" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "shrink-0",
					"aria-label": "VYRAL London, back to top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: wordmark_default,
						alt: "",
						className: "h-6 w-auto md:h-7"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Primary",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: cn("text-sm transition-colors duration-quick ease-smooth", active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
						"aria-current": active === link.id ? "true" : void 0,
						children: link.label
					}, link.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 md:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LondonClock, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#brief",
							className: "inline-flex h-11 items-center px-1 text-sm text-foreground md:hidden",
							children: "Brief"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#brief",
								children: "Start a brief"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center border border-border text-foreground md:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((value) => !value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Close menu" : "Open menu"
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "fixed inset-x-0 top-16 bottom-0 z-30 bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-5 py-6",
				"aria-label": "Mobile",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex h-14 items-center border-b border-border font-display text-2xl tracking-display text-foreground",
					onClick: () => setOpen(false),
					children: link.label
				}, link.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#brief",
						onClick: () => setOpen(false),
						children: "Start a brief"
					})
				})]
			})
		})]
	});
}
var control = "w-full border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none";
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-brand text-muted-foreground uppercase", className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(control, "h-12", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(control, "min-h-32 resize-y py-3 leading-body", className),
		...props
	});
}
function FieldError({ id, children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id,
		className: "text-sm text-foreground",
		role: "alert",
		children
	});
}
var practices = [
	{
		id: "people",
		index: "01",
		title: "People",
		line: "A public life, held with care.",
		body: "Founders, artists, athletes and public figures. We shape how a name is introduced, defended and remembered — the interviews, the narrative, and the long quiet between headlines."
	},
	{
		id: "brands",
		index: "02",
		title: "Brands",
		line: "Reputation a company can repeat.",
		body: "Launches, repositioning, and the story a house earns when nobody is watching the campaign. We write the line that sales, culture and the press can all say without distorting it."
	},
	{
		id: "culture",
		index: "03",
		title: "Culture",
		line: "Rooms, seasons, and what a city feels.",
		body: "Exhibitions, nightlife, ideas and the nights that make London feel current. We connect cultural work to the people who will actually carry it — invited, not shouted."
	},
	{
		id: "impact",
		index: "04",
		title: "Global impact",
		line: "Purpose that survives a second reading.",
		body: "Coalitions, institutions and companies whose work has to land past one market. We edit purpose until it is precise, then place it where policy and culture overlap."
	}
];
var engagements = [
	{
		index: "01",
		title: "The Return",
		meta: "Heritage house · Mayfair",
		summary: "A reopening sequenced, not splashed.",
		body: "A room that had been dark. We refused the launch-party story and built a path: one editor inside, then the trade, then the city. The account stayed quieter than the place, which is why it lasted a season."
	},
	{
		index: "02",
		title: "After Dark",
		meta: "Cultural season · three rooms",
		summary: "One idea, carried from room to room.",
		body: "Three London addresses, a single sentence, and a press path that felt like an invitation. Culture desks came because the work was already in the room — not because a release asked them to."
	},
	{
		index: "03",
		title: "First Name",
		meta: "Founder · entering public life",
		summary: "The narrative, written before the first question.",
		body: "A personal public life assembled in private: what is said, what is never offered, and which conversations are worth having. By the first profile, every answer had a spine."
	},
	{
		index: "04",
		title: "The Long Table",
		meta: "Coalition · many capitals",
		summary: "A global story reduced to one clean line.",
		body: "Too many partners, too many slogans. We cut until the work could be said in a sentence a stranger would repeat, then placed that sentence where it would be tested — and still hold."
	}
];
var method = [
	{
		index: "01",
		title: "Listen",
		body: "The reputation you already have, said back without flattery."
	},
	{
		index: "02",
		title: "Frame",
		body: "A sentence the work can live inside — and nothing that fights it."
	},
	{
		index: "03",
		title: "Place",
		body: "The rooms, editors and moments that will carry it cleanly."
	},
	{
		index: "04",
		title: "Hold",
		body: "What we protect after the first headline, when the noise moves on."
	}
];
var ticker = [
	"People",
	"Brands",
	"Culture",
	"Global impact",
	"London",
	"Public relations"
];
var contactSchema = object({
	name: string().trim().min(2, "Tell us your name."),
	organisation: string().trim().min(2, "Add an organisation, or write Independent."),
	email: string().trim().email("That email does not look right.")
});
function ScrollProgress() {
	const [scale, setScale] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const height = document.documentElement.scrollHeight - window.innerHeight;
			setScale(height > 0 ? window.scrollY / height : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-foreground",
			style: { transform: `scaleX(${scale})` }
		})
	});
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const nodes = [
			"practice",
			"work",
			"method",
			"brief"
		].map((id) => document.getElementById(id)).filter((node) => node !== null);
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.2,
				.6
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return active;
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-svh overflow-hidden bg-background",
		"aria-label": "VYRAL London",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Night view of London across the Thames, with Tower Bridge and the City skyline, carrying the VYRAL London public relations wordmark.",
				className: "hero-frame absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto hidden max-w-6xl justify-end px-8 pb-10 md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#brief",
							children: "Start a brief"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#practice",
							children: "The practice"
						})
					})]
				})
			})
		]
	});
}
function Ticker() {
	const loop = [...ticker, ...ticker];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border bg-background py-4",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track gap-10",
			children: loop.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs tracking-brand text-muted-foreground uppercase",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-10 text-border",
					children: "/"
				})]
			}, `${item}-${index}`))
		})
	});
}
function Practice({ selected, onSelect, onDiscuss }) {
	const current = practices.find((item) => item.id === selected) ?? practices[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "practice",
		className: "scroll-mt-24 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-brand text-muted-foreground uppercase",
					children: "The practice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl",
					children: "Four ways the work arrives."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border",
					role: "list",
					children: practices.map((item) => {
						const isOn = item.id === current.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "listitem",
							className: "border-b border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": isOn,
								onClick: () => onSelect(item.id),
								className: "flex w-full items-baseline gap-4 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 text-xs tabular-nums text-muted-foreground",
									children: item.index
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-display text-2xl tracking-display transition-colors duration-quick ease-smooth md:text-3xl", isOn ? "text-foreground" : "text-muted-foreground"),
									children: item.title
								})]
							})
						}, item.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "swap-in mt-8 max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl tracking-display text-foreground",
							children: current.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-body text-pretty text-muted-foreground",
							children: current.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-8",
							variant: "outline",
							onClick: () => onDiscuss(current.id),
							children: ["Discuss ", current.title]
						})
					]
				}, current.id)]
			})]
		})
	});
}
function Work() {
	const [open, setOpen] = (0, import_react.useState)(engagements[0].index);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-24 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-brand text-muted-foreground uppercase",
						children: "The shape of the work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl",
						children: "Not a client list. A way of holding a story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-prose text-pretty leading-body text-muted-foreground",
						children: "Four kinds of engagement. The names are the work, not a roster — so you can feel the pace before we speak."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 border-t border-border",
				children: engagements.map((item) => {
					const isOpen = open === item.index;
					const panelId = `work-${item.index}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": isOpen,
							"aria-controls": panelId,
							onClick: () => setOpen(isOpen ? null : item.index),
							className: "flex w-full items-center gap-4 py-6 text-left md:gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 shrink-0 text-xs tabular-nums text-muted-foreground",
									children: item.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-2xl tracking-display md:text-3xl",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted-foreground",
										children: item.meta
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: cn("size-5 shrink-0 transition-transform duration-fast ease-smooth", isOpen && "rotate-180"),
									"aria-hidden": "true"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: panelId,
							className: "fold",
							"data-open": isOpen,
							role: "region",
							"aria-hidden": !isOpen,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fold-inner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 pb-8 pl-12 md:max-w-2xl md:pl-16",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground",
										children: item.summary
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-pretty leading-body text-muted-foreground",
										children: item.body
									})]
								})
							})
						})]
					}, item.index);
				})
			})]
		})
	});
}
function Method() {
	const [active, setActive] = (0, import_react.useState)(0);
	const step = method[active] ?? method[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "scroll-mt-24 border-b border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-brand text-muted-foreground uppercase",
					children: "Method"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl",
					children: "Listen. Frame. Place. Hold."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
					role: "tablist",
					"aria-label": "Method",
					children: method.map((item, index) => {
						const isOn = index === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": isOn,
							onClick: () => setActive(index),
							className: cn("flex min-h-28 flex-col items-start gap-3 bg-card p-5 text-left transition-colors duration-quick ease-smooth", isOn ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tabular-nums tracking-brand",
								children: item.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-display",
								children: item.title
							})]
						}, item.index);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "swap-in mt-8 max-w-prose text-lg leading-body text-pretty text-foreground",
					children: step.body
				}, step.index)
			]
		})
	});
}
function Brief({ request }) {
	const formId = (0, import_react.useId)();
	const [step, setStep] = (0, import_react.useState)(0);
	const [practice, setPractice] = (0, import_react.useState)(null);
	const [ambition, setAmbition] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [organisation, setOrganisation] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
		if (ambition.trim().length < 12) {
			setErrors({ ambition: "A sentence is enough — just a little more than a word." });
			return;
		}
		setErrors({});
		setStep(2);
	}
	function submit() {
		const parsed = contactSchema.safeParse({
			name,
			organisation,
			email
		});
		if (!parsed.success) {
			const next = {};
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "brief",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-brand text-muted-foreground uppercase",
						children: "A brief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-display font-semibold tracking-display text-balance md:text-5xl",
						children: "Tell us who we are speaking for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-prose text-pretty leading-body text-muted-foreground",
						children: "A short note is enough. We read every brief in London and reply within two working days."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-border bg-card p-6 md:col-span-7 md:p-8",
				children: done && chosen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "swap-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-brand text-muted-foreground uppercase",
							children: "Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-4 font-display text-3xl tracking-display text-balance",
							children: [
								"We have your ",
								chosen.title,
								" brief, ",
								name.trim(),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-body text-muted-foreground",
							children: [
								organisation.trim(),
								" · ",
								email.trim(),
								". A short note is how every engagement here begins."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-8",
							variant: "outline",
							onClick: reset,
							children: "Write another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: formId,
					onSubmit: (event) => {
						event.preventDefault();
						if (step === 0) nextFromPractice();
						else if (step === 1) nextFromAmbition();
						else submit();
					},
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tabular-nums tracking-brand text-muted-foreground uppercase",
							children: [
								"0",
								step + 1,
								" / 03"
							]
						}),
						step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "swap-in mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "font-display text-2xl tracking-display",
									children: "Who is this for?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid gap-px bg-border sm:grid-cols-2",
									children: practices.map((item) => {
										const isOn = practice === item.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": isOn,
											onClick: () => {
												setPractice(item.id);
												setErrors({});
											},
											className: cn("min-h-16 bg-card px-4 py-4 text-left font-display text-xl tracking-display transition-colors duration-quick ease-smooth", isOn ? "bg-foreground text-background" : "text-foreground hover:bg-secondary"),
											children: item.title
										}, item.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
									id: "practice-error",
									children: errors.practice
								})
							]
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "swap-in mt-6 flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: `${formId}-ambition`,
									children: "What should the world feel?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: `${formId}-ambition`,
									name: "ambition",
									value: ambition,
									onChange: (event) => setAmbition(event.target.value),
									placeholder: "The sentence you want the work to leave behind.",
									"aria-invalid": Boolean(errors.ambition),
									"aria-describedby": errors.ambition ? "ambition-error" : void 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
									id: "ambition-error",
									children: errors.ambition
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "swap-in mt-6 grid gap-5",
							children: [
								chosen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [chosen.title, ambition.trim() ? ` — ${ambition.trim()}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: `${formId}-name`,
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `${formId}-name`,
											name: "name",
											autoComplete: "name",
											value: name,
											onChange: (event) => setName(event.target.value),
											"aria-invalid": Boolean(errors.name),
											"aria-describedby": errors.name ? "name-error" : void 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
											id: "name-error",
											children: errors.name
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: `${formId}-org`,
											children: "Organisation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `${formId}-org`,
											name: "organisation",
											autoComplete: "organization",
											value: organisation,
											onChange: (event) => setOrganisation(event.target.value),
											"aria-invalid": Boolean(errors.organisation),
											"aria-describedby": errors.organisation ? "org-error" : void 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
											id: "org-error",
											children: errors.organisation
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: `${formId}-email`,
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `${formId}-email`,
											name: "email",
											type: "email",
											autoComplete: "email",
											inputMode: "email",
											value: email,
											onChange: (event) => setEmail(event.target.value),
											"aria-invalid": Boolean(errors.email),
											"aria-describedby": errors.email ? "email-error" : void 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
											id: "email-error",
											children: errors.email
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								onClick: () => {
									setErrors({});
									setStep((value) => value - 1);
								},
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: step === 2 ? "Send the brief" : "Continue"
							})]
						})
					]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: lockup_default,
				alt: "VYRAL London Public Relations",
				className: "h-auto w-56"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 text-sm text-muted-foreground md:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "text-foreground hover:underline",
						children: "Back to top"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By appointment, London." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People · Brands · Culture · Global impact" })
				]
			})]
		})
	});
}
function HomePage() {
	const active = useActiveSection();
	const [selected, setSelected] = (0, import_react.useState)("people");
	const [request, setRequest] = (0, import_react.useState)(null);
	function discuss(id) {
		setSelected(id);
		setRequest({
			id,
			n: Date.now()
		});
		document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { active }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl leading-display font-semibold tracking-display text-balance md:col-span-7 md:text-6xl",
							children: "Reputation, placed with intent."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "self-end text-pretty leading-body text-muted-foreground md:col-span-5",
							children: "Public relations for people, brands and culture that should be felt — not merely seen. From a Mayfair room to a wire that crosses markets, the task is the same: say the right thing, in the right room, and let it travel."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practice, {
					selected,
					onSelect: setSelected,
					onDiscuss: discuss
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, { request })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
