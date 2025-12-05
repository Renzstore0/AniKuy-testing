// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

const protectedRoutes = ["/profile", "/my-list"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isProtected = protectedRoutes.some((path) =>
    router.pathname.startsWith(path)
  );

  return (
    <AuthProvider>
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>AniKuy</title>

          {/* pakai CSS lama AniKuy, taruh di public/assets/css/style.css */}
          <link rel="stylesheet" href="/assets/css/style.css" />

          {/* favicon lama */}
          <link
            rel="icon"
            type="image/png"
            href="https://pomf2.lain.la/f/leu65s82.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://pomf2.lain.la/f/leu65s82.png"
          />
        </Head>

        {/* kalau masih mau pakai core.js lama, copy ke public/assets/js/core.js */}
        {/* <Script src="/assets/js/core.js" strategy="beforeInteractive" /> */}

        {isProtected ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    </AuthProvider>
  );
}

export default MyApp;

