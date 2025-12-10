export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/my-list/:path*", "/profile/:path*", "/settings/:path*"]
};