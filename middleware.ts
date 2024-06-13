import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;

    // ログインページか登録ページから遷移してきたかどうか
    const isAuthPage =
      req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null;
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

// 設定したパスにアクセスする際に認証を行う
export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
};
