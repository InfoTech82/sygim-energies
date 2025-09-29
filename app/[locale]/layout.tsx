import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LoaderWrapper from "@/components/ui/LoaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SYGIM ENERGIES SAS - Leader Transport Pétrolier",
    template: "%s | SYGIM ENERGIES SAS",
  },
  description:
    "SYGIM ENERGIES SAS au capital de 10 Millions FCFA. Commercialisation produits pétroliers (GASOIL, SUPER, HUILE) et transport spécialisé avec 200+ véhicules articulés. Service bilingue.",
};

const locales = ["fr", "en"] as const;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="Africa/Abidjan">
          <LoaderWrapper>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </LoaderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


