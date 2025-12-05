// pages/_app.js
import "../global/styles/style.css"; // sekarang file-nya ada
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

const protectedRoutes = ["/my-list"];

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
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>AniKuy</title>
        </Head>

        {/* script core bawaan situs */}
        <Script
          src="/assets/js/core.js"
          strategy="afterInteractive"
        />

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
