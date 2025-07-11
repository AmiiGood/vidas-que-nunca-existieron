import "./globals.css";
import { Crimson_Text, Caveat } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Vidas que Nunca Existieron",
  description:
    "Historias de personas que nunca fueron, pero pudieron haber sido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${crimson.variable} ${caveat.variable}`}>
      <body className="bg-papel text-tinta font-serif">{children}</body>
    </html>
  );
}
