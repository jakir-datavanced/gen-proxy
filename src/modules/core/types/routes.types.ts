export type RouteKey =
  | "dashboard"
  | "home"
  | "login"
  | "payments"
  | "contactUs"
  | "faq"
  | "termsAndConditions";

export type RoutesMap = Record<RouteKey, string>;
