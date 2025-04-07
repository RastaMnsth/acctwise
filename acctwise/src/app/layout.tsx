import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcctWise | Contabilidade, Manutenção e Consultoria",
  description: "Serviços profissionais de contabilidade, manutenção e consultoria em Moscavide, Portugal. Soluções personalizadas para empresas e particulares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
