import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Management App",
  description: "Efficient staff and cleaning management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
