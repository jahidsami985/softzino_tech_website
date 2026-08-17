import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getServiceHref } from "@/lib/services-data";
import { assetPath } from "@/lib/site-paths";

type ButtonVariant = "dark" | "gold" | "teal" | "outline" | "outlineLight";

type ButtonData = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
};

export type BatchIconCard = {
  icon?: LucideIcon;
  title: string;
  desc?: string;
  eyebrow?: string;
  bullets?: string[];
  tone?: "navy" | "teal" | "mint" | "gold" | "black" | "gray" | "white";
  span?: "wide" | "tall";
};

type HeroData = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  theme?: "dark" | "black" | "light";
  layout?: "split" | "background" | "plain" | "stacked";
  backgroundImage?: string;
  media?: {
    src: string;
    alt: string;
    overlayTitle?: string;
    overlayText?: string;
  };
  primary?: ButtonData;
  secondary?: ButtonData;
  breadcrumb?: boolean;
};

type OverviewSection = {
  type: "overview";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  eyebrow?: string;
  label?: string;
  title?: string;
  intro?: string;
  body?: string[];
  cards?: BatchIconCard[];
  image?: {
    src: string;
    alt: string;
    overlayTitle?: string;
    overlayText?: string;
  };
};

type CardGridSection = {
  type: "cards";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  eyebrow?: string;
  title?: string;
  intro?: string;
  cards: BatchIconCard[];
  columns?: 1 | 2 | 3 | 4;
  centered?: boolean;
  cardStyle?: "plain" | "soft" | "dark" | "numbered" | "mosaic" | "icons";
};

type SplitListSection = {
  type: "split-list";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  eyebrow?: string;
  title: string;
  intro?: string;
  bullets?: { title: string; desc?: string }[];
  image?: {
    src: string;
    alt: string;
    stat?: string;
    statLabel?: string;
  };
};

type TechIndustrySection = {
  type: "tech-industries";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  title?: string;
  intro?: string;
  technologies: string[];
  industries?: { title: string; desc?: string; icon?: LucideIcon; meta?: string }[];
  industryTitle?: string;
  centered?: boolean;
};

type ProcessSection = {
  type: "process";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  title: string;
  intro?: string;
  steps: { title: string; desc: string }[];
};

type StatsSection = {
  type: "stats";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  eyebrow?: string;
  title?: string;
  intro?: string;
  stats: { value: string; label: string; desc?: string }[];
};

type QuoteSection = {
  type: "quote";
  id?: string;
  theme?: "dark" | "black";
  quote: string;
  attribution?: string;
};

type RelatedSection = {
  type: "related";
  id?: string;
  theme?: "white" | "muted" | "dark" | "black";
  title?: string;
  intro?: string;
  services: { title: string; desc: string; image?: string; href?: string }[];
};

type CtaSection = {
  type: "cta";
  id?: string;
  theme?: "dark" | "black" | "gold" | "light";
  title: string;
  text?: string;
  button?: ButtonData;
  secondary?: ButtonData;
};

export type BatchServiceSection =
  | OverviewSection
  | CardGridSection
  | SplitListSection
  | TechIndustrySection
  | ProcessSection
  | StatsSection
  | QuoteSection
  | RelatedSection
  | CtaSection;

export type BatchServiceData = {
  title: string;
  slug: string;
  description: string;
  designFile: string;
  cssFile?: string;
  assetFiles?: string[];
  route: string;
  hero: HeroData;
  sections: BatchServiceSection[];
};

const sectionThemeClasses = {
  white: "bg-white text-text-dark",
  muted: "bg-bg-offwhite text-text-dark",
  dark: "bg-navy-deep text-white",
  black: "bg-black text-white",
};

const badgeToneClasses: Record<NonNullable<BatchIconCard["tone"]>, string> = {
  navy: "bg-navy-deep text-white",
  teal: "bg-teal-primary text-white",
  mint: "bg-teal-mint text-teal-primary",
  gold: "bg-[#F5CF74] text-navy-deep",
  black: "bg-black text-white",
  gray: "bg-border-lighter text-text-dark",
  white: "bg-white text-navy-deep",
};

const buttonClasses: Record<ButtonVariant, string> = {
  dark: "bg-black text-white hover:bg-navy-deep",
  gold: "bg-[#F5CF74] text-navy-deep hover:bg-[#FFD978]",
  teal: "bg-teal-primary text-white hover:bg-teal-secondary",
  outline: "border border-text-dark text-text-dark hover:bg-text-dark hover:text-white",
  outlineLight: "border border-white/35 text-white hover:bg-white/10",
};

export default function BatchServicePage({ data }: { data: BatchServiceData }) {
  return (
    <>
      <Hero hero={data.hero} current={data.title} />
      {data.sections.map((section, index) => (
        <SectionRenderer key={`${section.type}-${section.id ?? index}`} section={section} />
      ))}
    </>
  );
}

function Hero({ hero, current }: { hero: HeroData; current: string }) {
  const theme = hero.theme ?? "dark";
  const layout = hero.layout ?? "split";
  const isLight = theme === "light";
  const bgClass = theme === "black" ? "bg-black" : isLight ? "bg-bg-offwhite" : "bg-navy-deep";
  const textClass = isLight ? "text-text-dark" : "text-white";
  const mutedTextClass = isLight ? "text-body-text" : "text-footer-muted";
  const titleSizeClass =
    hero.title.length > 80
      ? "text-[1.625rem] leading-[1.18] sm:text-4xl sm:leading-tight lg:text-6xl"
      : "text-3xl leading-tight sm:text-4xl lg:text-6xl";

  if (layout === "background" && hero.backgroundImage) {
    return (
      <section className={`relative overflow-hidden ${bgClass}`}>
        <Image
          src={assetPath(hero.backgroundImage)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-r from-bg-offwhite via-bg-offwhite/85 to-bg-offwhite/30"
              : "bg-gradient-to-r from-black/85 via-navy-deep/70 to-black/20"
          }`}
        />
        <div className="relative mx-auto max-w-content px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28">
          {hero.breadcrumb && <MiniBreadcrumb current={current} dark={!isLight} />}
          <div className="min-w-0 max-w-3xl">
            <Eyebrow label={hero.eyebrow} light={isLight} />
            <h1 className={`mt-8 break-words font-bold ${titleSizeClass} ${textClass}`}>
              <HighlightedText text={hero.title} highlight={hero.highlight} />
            </h1>
            {hero.subtitle && (
              <p className={`mt-6 max-w-2xl break-words text-lg leading-relaxed ${mutedTextClass}`}>
                {hero.subtitle}
              </p>
            )}
            <ButtonRow primary={hero.primary} secondary={hero.secondary} light={isLight} />
          </div>
        </div>
      </section>
    );
  }

  if (layout === "stacked" && hero.media) {
    return (
      <section className={bgClass}>
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          {hero.breadcrumb && <MiniBreadcrumb current={current} dark={!isLight} />}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 max-w-3xl">
              <Eyebrow label={hero.eyebrow} light={isLight} />
              <h1 className={`mt-8 break-words font-bold ${titleSizeClass} ${textClass}`}>
                <HighlightedText text={hero.title} highlight={hero.highlight} />
              </h1>
              {hero.subtitle && (
                <p className={`mt-6 max-w-2xl break-words text-lg leading-relaxed ${mutedTextClass}`}>
                  {hero.subtitle}
                </p>
              )}
            </div>
            <ButtonRow primary={hero.primary} secondary={hero.secondary} light={isLight} />
          </div>

          <div className="mt-14">
            <MediaCard
              src={hero.media.src}
              alt={hero.media.alt}
              overlayTitle={hero.media.overlayTitle}
              overlayText={hero.media.overlayText}
              wide
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={bgClass}>
      <div
        className={`mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:gap-12 lg:px-16 lg:py-24 ${
          hero.media ? "lg:grid-cols-[1fr_0.9fr]" : ""
        }`}
      >
        <div className="min-w-0 max-w-3xl">
          {hero.breadcrumb && <MiniBreadcrumb current={current} dark={!isLight} />}
          <Eyebrow label={hero.eyebrow} light={isLight} />
          <h1 className={`mt-8 break-words font-bold ${titleSizeClass} ${textClass}`}>
            <HighlightedText text={hero.title} highlight={hero.highlight} />
          </h1>
          {hero.subtitle && (
            <p className={`mt-6 max-w-2xl break-words text-lg leading-relaxed ${mutedTextClass}`}>
              {hero.subtitle}
            </p>
          )}
          <ButtonRow primary={hero.primary} secondary={hero.secondary} light={isLight} />
        </div>

        {hero.media && (
          <MediaCard
            src={hero.media.src}
            alt={hero.media.alt}
            overlayTitle={hero.media.overlayTitle}
            overlayText={hero.media.overlayText}
          />
        )}
      </div>
    </section>
  );
}

function SectionRenderer({ section }: { section: BatchServiceSection }) {
  switch (section.type) {
    case "overview":
      return <OverviewSectionView section={section} />;
    case "cards":
      return <CardGridSectionView section={section} />;
    case "split-list":
      return <SplitListSectionView section={section} />;
    case "tech-industries":
      return <TechIndustrySectionView section={section} />;
    case "process":
      return <ProcessSectionView section={section} />;
    case "stats":
      return <StatsSectionView section={section} />;
    case "quote":
      return <QuoteSectionView section={section} />;
    case "related":
      return <RelatedSectionView section={section} />;
    case "cta":
      return <CtaSectionView section={section} />;
    default:
      return null;
  }
}

function OverviewSectionView({ section }: { section: OverviewSection }) {
  const theme = section.theme ?? "white";
  const dark = theme === "dark" || theme === "black";

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-16 lg:py-24">
        <div className="min-w-0">
          <Eyebrow label={section.eyebrow} light={!dark} />
          {section.label && (
            <p className={`mt-6 text-lg font-medium ${dark ? "text-white" : "text-text-dark"}`}>
              {section.label}
            </p>
          )}
          {section.title && (
            <h2
              className={`mt-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
                dark ? "text-white" : "text-text-dark"
              }`}
            >
              {section.title}
            </h2>
          )}
          {section.intro && (
            <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
              {section.intro}
            </p>
          )}
          {section.body && (
            <div className="mt-6 space-y-5">
              {section.body.map((text) => (
                <p key={text} className={`text-base leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="grid min-w-0 gap-6">
          {section.image && (
            <MediaCard
              src={section.image.src}
              alt={section.image.alt}
              overlayTitle={section.image.overlayTitle}
              overlayText={section.image.overlayText}
            />
          )}
          {section.cards && (
            <div className={`grid grid-cols-1 gap-6 ${section.cards.length > 1 ? "md:grid-cols-2" : ""}`}>
              {section.cards.map((card) => (
                <FeatureCard key={card.title} card={card} dark={dark} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CardGridSectionView({ section }: { section: CardGridSection }) {
  const theme = section.theme ?? "muted";
  const dark = theme === "dark" || theme === "black";
  const columns = section.columns ?? 3;
  const gridClass =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 3
        ? "lg:grid-cols-3"
        : columns === 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1";

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
        <div className={section.centered ? "mx-auto max-w-3xl text-center" : "min-w-0 max-w-3xl"}>
          <Eyebrow label={section.eyebrow} light={!dark} />
          {section.title && (
            <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
              {section.title}
            </h2>
          )}
          {section.intro && (
            <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
              {section.intro}
            </p>
          )}
        </div>

        <div className={`mt-12 grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 ${gridClass}`}>
          {section.cards.map((card, index) => (
            section.cardStyle === "icons" ? (
              <IconLabelCard key={card.title} card={card} dark={dark} />
            ) : (
              <FeatureCard
                key={card.title}
                card={card}
                dark={dark || section.cardStyle === "dark"}
                number={section.cardStyle === "numbered" ? String(index + 1).padStart(2, "0") : undefined}
                mosaic={section.cardStyle === "mosaic"}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitListSectionView({ section }: { section: SplitListSection }) {
  const theme = section.theme ?? "white";
  const dark = theme === "dark" || theme === "black";

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-24">
        <div className="min-w-0">
          <Eyebrow label={section.eyebrow} light={!dark} />
          <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
            {section.title}
          </h2>
          {section.intro && (
            <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
              {section.intro}
            </p>
          )}
          {section.bullets && (
            <ul className="mt-8 space-y-6">
              {section.bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-teal-secondary" size={18} />
                  <div>
                    <h3 className={`font-bold ${dark ? "text-white" : "text-text-dark"}`}>{bullet.title}</h3>
                    {bullet.desc && (
                      <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                        {bullet.desc}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {section.image && (
          <div className="relative">
            <Image
              src={assetPath(section.image.src)}
              alt={section.image.alt}
              width={650}
              height={430}
              className="w-full rounded-card object-cover shadow-card-md"
            />
            {section.image.stat && (
              <div className="mt-4 rounded-card bg-white p-5 shadow-card-lg sm:absolute sm:-bottom-8 sm:left-8 sm:mt-0 sm:p-7">
                <p className="break-words text-3xl font-bold text-black sm:text-4xl">{section.image.stat}</p>
                {section.image.statLabel && (
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-body-text">
                    {section.image.statLabel}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function TechIndustrySectionView({ section }: { section: TechIndustrySection }) {
  const theme = section.theme ?? "white";
  const dark = theme === "dark" || theme === "black";
  const centered = section.centered && !section.industries;

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div
        className={`mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:gap-12 lg:px-16 lg:py-24 ${
          section.industries ? "lg:grid-cols-2" : ""
        }`}
      >
        <div className={`min-w-0 ${centered ? "mx-auto max-w-4xl text-center" : ""}`}>
          <Eyebrow label={section.title ? "Tech Stack" : undefined} light={!dark} />
          <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
            {section.title ?? "Technologies We Master"}
          </h2>
          {section.intro && (
            <p className={`mt-6 text-base leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
              {section.intro}
            </p>
          )}
          <div className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
            {section.technologies.map((technology) => (
              <span
                key={technology}
                className={`max-w-full break-words rounded-card border px-4 py-3 text-sm font-medium sm:px-5 ${
                  dark
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-border-light bg-white text-text-dark shadow-card-sm"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {section.industries && (
          <div className="min-w-0">
            <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-text-dark"}`}>
              {section.industryTitle ?? "Industries"}
            </h3>
            <div className="mt-6 grid gap-4">
              {section.industries.map(({ icon: Icon, title, desc, meta }) => (
                <article
                  key={title}
                  className={`flex min-w-0 flex-col gap-3 border-b pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
                    dark ? "border-white/10" : "border-border-light"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {Icon && <Icon className="mt-1 shrink-0 text-teal-secondary" size={22} />}
                    <div>
                      <h4 className={dark ? "text-white" : "text-text-dark"}>{title}</h4>
                      {desc && (
                        <p className={`mt-1 text-sm ${dark ? "text-footer-muted" : "text-body-text"}`}>
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>
                  {meta && <p className={`break-words text-sm sm:shrink-0 ${dark ? "text-footer-muted" : "text-placeholder-gray"}`}>{meta}</p>}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProcessSectionView({ section }: { section: ProcessSection }) {
  const theme = section.theme ?? "white";
  const dark = theme === "dark" || theme === "black";
  const gridClass = section.steps.length >= 5 ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
        <h2 className={`text-3xl font-bold md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
          {section.title}
        </h2>
        {section.intro && (
          <p className={`mx-auto mt-5 max-w-3xl text-lg leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
            {section.intro}
          </p>
        )}
        <div className={`mt-12 grid grid-cols-1 gap-8 ${gridClass}`}>
          {section.steps.map((step, index) => (
            <article key={step.title}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-card bg-black text-xl font-bold text-white shadow-card-md">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className={`mt-6 text-lg font-medium ${dark ? "text-white" : "text-text-dark"}`}>
                {step.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSectionView({ section }: { section: StatsSection }) {
  const theme = section.theme ?? "dark";
  const dark = theme === "dark" || theme === "black";

  return (
    <section id={section.id} className={sectionThemeClasses[theme]}>
      <div className="mx-auto max-w-content px-4 py-12 md:px-8 md:py-16 lg:px-16">
        {(section.eyebrow || section.title || section.intro) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Eyebrow label={section.eyebrow} light={!dark} />
            {section.title && (
              <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
                {section.title}
              </h2>
            )}
            {section.intro && (
              <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                {section.intro}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.stats.map((stat) => (
            <article
              key={`${stat.value}-${stat.label}`}
              className={`min-w-0 rounded-card border px-6 py-8 text-center ${
                dark ? "border-white/10 bg-white/5" : "border-border-lighter bg-white shadow-card-sm"
              }`}
            >
              <p className={`break-words text-3xl font-bold sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
                {stat.value}
              </p>
              <p className={`mt-3 font-mono text-xs font-bold uppercase tracking-wide ${dark ? "text-footer-muted" : "text-placeholder-gray"}`}>
                {stat.label}
              </p>
              {stat.desc && (
                <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                  {stat.desc}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSectionView({ section }: { section: QuoteSection }) {
  const bgClass = section.theme === "black" ? "bg-black" : "bg-navy-deep";

  return (
    <section id={section.id} className={bgClass}>
      <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
        <p className="mx-auto max-w-5xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          &quot;{section.quote}&quot;
        </p>
        {section.attribution && (
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-teal-mint">
            {section.attribution}
          </p>
        )}
      </div>
    </section>
  );
}

function RelatedSectionView({ section }: { section: RelatedSection }) {
  const theme = section.theme ?? "white";
  const dark = theme === "dark" || theme === "black";
  const bgClass =
    theme === "black"
      ? "bg-black"
      : theme === "dark"
        ? "bg-navy-deep"
        : theme === "muted"
          ? "bg-bg-offwhite"
          : "bg-white";

  return (
    <section id={section.id} className={bgClass}>
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
        <div
          className={`flex flex-col justify-between gap-4 border-b pb-8 md:flex-row md:items-end ${
            dark ? "border-white/10" : "border-border-light"
          }`}
        >
          <div>
            <h2 className={`text-3xl font-bold md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-dark"}`}>
              {section.title ?? "Related Services"}
            </h2>
            {section.intro && (
              <p className={`mt-4 text-lg ${dark ? "text-footer-muted" : "text-body-text"}`}>
                {section.intro}
              </p>
            )}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-teal-primary hover:underline"
          >
            View all Services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.services.map((service) => (
            <Link
              key={service.title}
              href={service.href ?? getServiceHref(service.title)}
              className={`group overflow-hidden rounded-card border shadow-card-sm transition-colors hover:border-teal-primary ${
                dark ? "border-white/10 bg-white/5" : "border-border-lighter bg-white"
              }`}
            >
              {service.image && (
                <Image
                  src={assetPath(service.image)}
                  alt=""
                  width={420}
                  height={190}
                  className="h-44 w-full object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-text-dark"}`}>
                    {service.title}
                  </h3>
                  <ExternalLink className="text-placeholder-gray transition-colors group-hover:text-teal-primary" size={18} />
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSectionView({ section }: { section: CtaSection }) {
  const isWarm = section.theme === "gold" || section.theme === "light";
  const bgClass =
    section.theme === "gold"
      ? "bg-[#FBE0A3]"
      : section.theme === "light"
        ? "bg-bg-offwhite"
        : section.theme === "black"
          ? "bg-black"
          : "bg-navy-deep";

  return (
    <section id={section.id} className={bgClass}>
      <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
        <h2 className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${isWarm ? "text-text-dark" : "text-white"}`}>
          {section.title}
        </h2>
        {section.text && (
          <p className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${isWarm ? "text-body-text" : "text-footer-muted"}`}>
            {section.text}
          </p>
        )}
        <div className="mt-10">
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <ActionButton button={section.button ?? { label: "Schedule a Consultation", variant: "gold" }} />
            {section.secondary && <ActionButton button={section.secondary} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLabelCard({ card, dark }: { card: BatchIconCard; dark?: boolean }) {
  const Icon = card.icon;

  return (
    <article className="flex min-w-0 flex-col items-center text-center">
      {Icon && <Icon className="text-teal-primary" size={30} />}
      <h3 className={`${Icon ? "mt-5" : ""} break-words text-lg font-medium ${dark ? "text-white" : "text-text-dark"}`}>
        {card.title}
      </h3>
      {card.desc && (
        <p className={`mt-3 max-w-xs text-sm leading-relaxed ${dark ? "text-footer-muted" : "text-body-text"}`}>
          {card.desc}
        </p>
      )}
    </article>
  );
}

function FeatureCard({
  card,
  dark,
  number,
  mosaic = false,
}: {
  card: BatchIconCard;
  dark?: boolean;
  number?: string;
  mosaic?: boolean;
}) {
  const Icon = card.icon;
  const tone = card.tone ?? (dark ? "mint" : "navy");
  const isDarkCard = card.tone === "black" || card.tone === "navy";
  const wideClass = card.span === "wide" ? "md:col-span-2" : "";
  const cardClass = isDarkCard
    ? "border-white/10 bg-navy-deep text-white"
    : card.tone === "mint"
      ? "border-teal-mint bg-teal-mint text-text-dark"
      : dark
        ? "border-white/10 bg-white/5 text-white"
        : "border-border-lighter bg-white text-text-dark";

  return (
    <article
      className={`relative rounded-card border p-6 shadow-card-sm md:p-8 ${cardClass} ${wideClass} ${
        mosaic ? "min-h-64" : ""
      } min-w-0`}
    >
      {number && (
        <span className="absolute right-6 top-6 font-mono text-sm text-placeholder-gray/70 md:right-8 md:top-8">{number}</span>
      )}
      {Icon && (
        <div className={`flex h-12 w-12 items-center justify-center rounded-sm4 ${badgeToneClasses[tone]}`}>
          <Icon size={22} />
        </div>
      )}
      {card.eyebrow && (
        <p className="mt-6 font-mono text-xs uppercase tracking-wide text-teal-primary">
          {card.eyebrow}
        </p>
      )}
      <h3 className={`mt-6 break-words text-xl font-bold leading-snug ${isDarkCard || dark ? "text-white" : "text-text-dark"}`}>
        {card.title}
      </h3>
      {card.desc && (
        <p className={`mt-4 break-words text-base leading-relaxed ${isDarkCard || dark ? "text-footer-muted" : "text-body-text"}`}>
          {card.desc}
        </p>
      )}
      {card.bullets && (
        <ul className="mt-6 space-y-3">
          {card.bullets.map((bullet) => (
            <li key={bullet} className={`flex gap-3 text-sm ${isDarkCard || dark ? "text-footer-muted" : "text-body-text"}`}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-mint" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function MediaCard({
  src,
  alt,
  overlayTitle,
  overlayText,
  wide,
}: {
  src: string;
  alt: string;
  overlayTitle?: string;
  overlayText?: string;
  wide?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-card shadow-card-lg">
      <Image
        src={assetPath(src)}
        alt={alt}
        width={wide ? 1180 : 650}
        height={wide ? 560 : 480}
        priority
        className={`${wide ? "aspect-[4/3] sm:aspect-[16/7]" : "aspect-[4/3]"} w-full object-cover`}
      />
      {overlayTitle && (
        <div className="static max-w-none rounded-none bg-white/95 p-4 shadow-none backdrop-blur sm:absolute sm:bottom-8 sm:left-8 sm:max-w-xs sm:rounded-card sm:p-6 sm:shadow-card-md">
          <p className="break-words text-xl font-bold text-black sm:text-2xl">{overlayTitle}</p>
          {overlayText && <p className="mt-2 text-sm leading-relaxed text-body-text">{overlayText}</p>}
        </div>
      )}
    </div>
  );
}

function ButtonRow({
  primary,
  secondary,
  light,
}: {
  primary?: ButtonData;
  secondary?: ButtonData;
  light: boolean;
}) {
  if (!primary && !secondary) return null;

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      {primary && <ActionButton button={primary} />}
      {secondary && (
        <ActionButton
          button={{
            ...secondary,
            variant: secondary.variant ?? (light ? "outline" : "outlineLight"),
          }}
        />
      )}
    </div>
  );
}

function ActionButton({ button }: { button: ButtonData }) {
  const variant = button.variant ?? "dark";

  return (
    <Link
      href={button.href ?? "/hire-developers#request-talent"}
      className={`inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 px-5 py-4 text-center text-sm font-bold uppercase tracking-wide transition-colors sm:w-auto sm:px-8 ${buttonClasses[variant]}`}
    >
      <span className="min-w-0 break-words">{button.label}</span>
      <ArrowRight size={16} className="shrink-0" />
    </Link>
  );
}

function Eyebrow({ label, light }: { label?: string; light: boolean }) {
  if (!label) return null;

  return (
    <p
      className={`inline-flex max-w-full items-center gap-3 break-words font-mono text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-teal-primary" : "text-teal-mint"
      }`}
    >
      <span className={`h-px w-8 shrink-0 sm:w-12 ${light ? "bg-teal-mint" : "bg-teal-mint"}`} />
      {label}
    </p>
  );
}

function HighlightedText({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;

  const [before, after] = text.split(highlight);

  return (
    <>
      {before}
      <span className="text-teal-mint">{highlight}</span>
      {after}
    </>
  );
}

function MiniBreadcrumb({ current, dark }: { current: string; dark: boolean }) {
  return (
    <nav className={`mb-10 flex min-w-0 flex-wrap items-center gap-2 font-mono text-xs tracking-wide md:mb-12 ${dark ? "text-white/55" : "text-body-text"}`}>
      <Link href="/" className="hover:text-teal-secondary">
        Home
      </Link>
      <span>/</span>
      <Link href="/services" className="hover:text-teal-secondary">
        Services
      </Link>
      <span>/</span>
      <span className="min-w-0 break-words font-bold text-teal-mint">{current}</span>
    </nav>
  );
}
