/* ────────────────────────────────────────────────────────────
   Conectcore — Data barrel export
   Importa os JSONs como dados default e re-exporta tipados.
   ──────────────────────────────────────────────────────────── */

import type {
  Service,
  CaseStudy,
  BlogArticle,
  ResearchPaper,
  Metric,
  AboutValue,
  NavLink,
  HeroData,
  ContactData,
  FooterData,
  CtaData,
  Partner,
  Project,
  StartProjectData,
} from "../types";

import servicesJson from "./services.json";
import casesJson from "./cases.json";
import blogJson from "./blog.json";
import researchJson from "./research.json";
import metricsJson from "./metrics.json";
import aboutJson from "./about.json";
import navbarJson from "./navbar.json";
import heroJson from "./hero.json";
import contactJson from "./contact.json";
import footerJson from "./footer.json";
import ctaJson from "./cta.json";
import partnersJson from "./partners.json";
import projectsJson from "./projects.json";
import startProjectJson from "./startProject.json";

export const defaultServices: Service[] = servicesJson;
export const defaultCases: CaseStudy[] = casesJson as CaseStudy[];
export const defaultBlog: BlogArticle[] = blogJson;
export const defaultResearch: ResearchPaper[] = researchJson;
export const defaultMetrics: Metric[] = metricsJson;
export const defaultAboutValues: AboutValue[] = aboutJson;
export const defaultNavLinks: NavLink[] = navbarJson;
export const defaultHero: HeroData = heroJson;
export const defaultContact: ContactData = contactJson as ContactData;
export const defaultFooter: FooterData = footerJson as FooterData;
export const defaultCta: CtaData = ctaJson;
export const defaultPartners: Partner[] = partnersJson;
export const defaultProjects: Project[] = projectsJson as Project[];
export const defaultStartProject: StartProjectData = startProjectJson;
