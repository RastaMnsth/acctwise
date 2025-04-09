import type { Metadata } from "next";
import { fontOptimization, inter } from "@/lib/fonts";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcctWise | Contabilidade, Manutenção e Consultoria",
  description: "Serviços profissionais de contabilidade, manutenção e consultoria em Moscavide, Portugal. Soluções personalizadas para empresas e particulares.",
  metadataBase: new URL("https://www.acc-wise.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={fontOptimization.variables}>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
      </head>
      <body
        className={`${inter.className} font-sans antialiased bg-white text-gray-900`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
