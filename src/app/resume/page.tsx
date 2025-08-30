import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Resume | Naman Jain",
  description:
    "Download the resume of Naman Jain - AI & ML developer, creative engineer, and product-focused builder.",
  keywords: [
    "Naman Jain",
    "Naman Jain resume",
    "AI developer",
    "creative developer",
    "ML developer portfolio",
    "react developer",
    "resume PDF",
    "developer resume",
  ],
  authors: [{ name: "Naman Jain", url: "https://nmnjain.tech/" }],
  creator: "Naman Jain",
  publisher: "Naman Jain",
  metadataBase: new URL("https://nmnjain.tech/"),
  alternates: {
    canonical: "https://nmnjain.tech/resume",
  },
  openGraph: {
    title: "Resume | Naman Jain",
    description:
      "Take a look at Naman Jain's resume - AI, ML, and creative web experiences.",
    url: "https://nmnjain.tech/resume",
    siteName: "Naman Jain",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Naman Jain Resume Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Naman Jain",
    description: "Download the resume of Naman Jain.",
    creator: "@naman",
    images: [""],
  },
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

export default function ResumePage() {
  redirect("/NamanJain_Resume.pdf");
}
