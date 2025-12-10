import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "AniKuy",
  description:
    "AniKuy adalah tempat buat ngatur dan ngikutin anime favoritmu. Lihat anime yang lagi tayang, simpan daftar favorit, dan pantau episode terbaru."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}