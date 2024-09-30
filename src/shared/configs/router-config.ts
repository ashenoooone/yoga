export type pages =
  | "main"
  | "profile"
  | "auth"
  | "register"
  | "assanas"
  | "pose";

export const routerPaths: Record<pages, string> = {
  main: "/",
  profile: "/profile",
  auth: "/auth",
  register: "/register",
  assanas: "/assanas",
  pose: "/pose",
};
