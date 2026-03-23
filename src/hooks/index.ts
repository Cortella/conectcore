/* ────────────────────────────────────────────────────────────
   Hooks especializados por entidade
   Atalhos tipados que encapsulam useDataStore + dados default.
   ──────────────────────────────────────────────────────────── */

export { useDataStore } from "./useDataStore";

import { useDataStore } from "./useDataStore";
import {
  defaultServices,
  defaultCases,
  defaultBlog,
  defaultCertificates,
  defaultMetrics,
  defaultAboutValues,
  defaultNavLinks,
} from "../data";
import type {
  Service,
  CaseStudy,
  BlogArticle,
  Certificate,
  Metric,
  AboutValue,
  NavLink,
} from "../types";

export const useServices = () =>
  useDataStore<Service>("services", defaultServices);

export const useCases = () => useDataStore<CaseStudy>("cases", defaultCases);

export const useBlog = () => useDataStore<BlogArticle>("blog", defaultBlog);

export const useCertificates = () =>
  useDataStore<Certificate>("certificates", defaultCertificates);

export const useMetrics = () => useDataStore<Metric>("metrics", defaultMetrics);

export const useAboutValues = () =>
  useDataStore<AboutValue>("aboutValues", defaultAboutValues);

export const useNavLinks = () =>
  useDataStore<NavLink>("navLinks", defaultNavLinks);
