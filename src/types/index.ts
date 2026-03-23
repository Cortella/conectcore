/* ────────────────────────────────────────────────────────────
   Conectcore — Tipos do Data Layer
   Cada entidade representa um tipo de card do site.
   ──────────────────────────────────────────────────────────── */

/** Identificador genérico usado em todas as entidades */
export interface BaseEntity {
  id: string;
}

/* ── Services ─────────────────────────────────────────────── */

export interface Service extends BaseEntity {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  /** Chave do mapa de ícones SVG (ex: "code", "mobile", "cloud") */
  icon: string;
}

/* ── Cases ────────────────────────────────────────────────── */

export interface CaseMetric {
  value: string;
  label: string;
}

export type MockupType = "desktop" | "phone" | "desktop-dark" | "desktop-nodes";

export interface CaseStudy extends BaseEntity {
  tag: string;
  title: string;
  desc: string;
  featured: boolean;
  mockupType: MockupType;
  metrics: CaseMetric[];
}

/* ── Blog ─────────────────────────────────────────────────── */

export interface BlogArticle extends BaseEntity {
  day: string;
  month: string;
  category: string;
  title: string;
  desc: string;
}

/* ── Certificates ─────────────────────────────────────────── */

export interface Certificate extends BaseEntity {
  src: string;
  alt: string;
}

/* ── Metrics ──────────────────────────────────────────────── */

export interface Metric extends BaseEntity {
  target: number;
  suffix?: string;
  label: string;
}

/* ── About (Values) ───────────────────────────────────────── */

export interface AboutValue extends BaseEntity {
  icon: string;
  title: string;
  text: string;
}

/* ── Navbar ────────────────────────────────────────────────── */

export interface NavLink extends BaseEntity {
  href: string;
  label: string;
  cta: boolean;
}

/* ── Hero ──────────────────────────────────────────────────── */

export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroData {
  badge: string;
  titleLine1: string;
  titleAccent: string;
  subtitle: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
}

/* ── Contact ──────────────────────────────────────────────── */

export interface ContactDetail extends BaseEntity {
  icon: string;
  label: string;
  value: string;
  href: string | null;
  external: boolean;
}

export interface ContactSubject {
  value: string;
  label: string;
}

export interface ContactData {
  details: ContactDetail[];
  subjects: ContactSubject[];
}

/* ── Footer ───────────────────────────────────────────────── */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: {
    logoSrc: string;
    logoAlt: string;
    tagline: string;
  };
  columns: FooterColumn[];
  legal: {
    copyright: string;
    links: FooterLink[];
  };
}

/* ── CTA Section ──────────────────────────────────────────── */

export interface CtaData {
  title: string;
  subtitle: string;
  primaryAction: HeroAction;
  whatsappAction: HeroAction;
}

/* ── Data Store ───────────────────────────────────────────── */

export interface DataStore<T extends BaseEntity> {
  items: T[];
  getById: (id: string) => T | undefined;
  add: (item: T) => void;
  update: (id: string, patch: Partial<Omit<T, "id">>) => void;
  remove: (id: string) => void;
  reset: () => void;
}
