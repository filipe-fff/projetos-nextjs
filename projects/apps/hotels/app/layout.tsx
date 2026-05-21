import "./globals.css";
import { geist } from "../../../packages/fonts/src";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel",
  description: "Happy Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.className}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
