import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import PrimaryFooter from "@/components/layouts/footer/PrimaryFooter";
import PrimaryHeader from "@/components/layouts/header/PrimaryHeader";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // include multiple weights as needed
  // variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rapifuzz",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={` ${montserrat.className} antialiased`}>
        <AppProviders>
          <Toaster />
          <main className="main_layout">
            <PrimaryHeader />
            {children}
            <PrimaryFooter />
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
