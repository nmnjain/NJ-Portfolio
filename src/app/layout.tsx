import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site";
import {
  migra,
  pp_fragment_glare,
  pp_fragment_sans,
  pp_fragment_serif,
  pp_neuecorp_compact,
  pp_neuecorp,
  pp_right_grotesk,
  pp_right_grotesk_compact,
  pp_right_grotesk_wide,
} from "@/utils/fonts";
import "./globals.css";
import { cn } from "@/utils";
import SiteWrapper from "@/components/SiteWrapper";
import AppProviders from "@/components/AppProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://nmnjain.tech/"),
  generator: "Naman Jain",
  applicationName: "Naman Jain",
  category: "technology",
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "https://nmnjain.tech/",
  },
  colorScheme: "dark",
  creator: "Naman Jain",
  publisher: "Naman Jain",
  authors: [
    {
      name: "Naman Jain",
      url: "https://nmnjain.tech/",
    },
  ],
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
  },
  keywords: [
    "Namna Jain",
    "Frontend Engineer",
    "Creative Developer",
    "Web3 Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "Personal Portfolio",
    "Bhopal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.ogImage}`,
        alt: "Naman Jain - Passionate Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@naman",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  themeColor: "#000000",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        tabIndex={-1}
        className={cn(
          migra.variable,
          pp_fragment_glare.variable,
          pp_fragment_sans.variable,
          pp_fragment_serif.variable,
          pp_neuecorp_compact.variable,
          pp_neuecorp.variable,
          pp_right_grotesk.variable,
          pp_right_grotesk_compact.variable,
          pp_right_grotesk_wide.variable,
          "relative antialiased w-screen bg-background overflow-x-hidden overflow-y-auto no-scroll"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naman Jain",
              url: "https://nmnjain.tech/",
              sameAs: [
                "https://x.com/Namxn27",
                "https://www.linkedin.com/in/naman-jain-352512250/",
              ],
              jobTitle: "Software Engineer",
              description: "Creative developer and ML enthusiast",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhopal",
                addressCountry: "India",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <AppProviders>
          <SiteWrapper>{children}</SiteWrapper>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
