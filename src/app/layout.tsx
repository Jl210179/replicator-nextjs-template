import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consignment Store Management Portal",
  description: "Multi-vendor consignment store management portal for employees and consignors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
