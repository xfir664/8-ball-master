import "@/app/scss/index.scss";

import type { Metadata } from "next";
import Footer from "@/app/Layout/Footer/Footer";
import Header from "@/app/Layout/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`page font-base`}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
