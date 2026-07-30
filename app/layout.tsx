import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://xiaowuguiOvO.github.io/cf2loc-project-page/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "CF²Loc — Coarse-to-Fine Visual Floorplan Localization without Ray Matching",
  description:
    "CF²Loc directly models multimodal camera pose distributions with global diffusion and local sub-meter refinement.",
  keywords: [
    "visual localization",
    "floorplan localization",
    "diffusion model",
    "computer vision",
    "indoor localization",
  ],
  authors: [
    { name: "Shiyong Meng" },
    { name: "Bolei Chen" },
    { name: "Ping Zhong" },
  ],
  openGraph: {
    title: "CF²Loc — From Uncertainty to Determinism",
    description:
      "Coarse-to-fine visual floorplan localization without ray matching.",
    url: siteUrl,
    siteName: "CF²Loc",
    images: [
      {
        url: "og.png",
        width: 1536,
        height: 1024,
        alt: "CF²Loc — From Uncertainty to Determinism",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CF²Loc — From Uncertainty to Determinism",
    description:
      "Coarse-to-fine visual floorplan localization without ray matching.",
    images: ["og.png"],
  },
  icons: {
    icon: "og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
