import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RouteBar from "../../components/routeBar/routeBar";
import FooterBar from "../../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W3Koleji",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <div className="dm-sans" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <RouteBar />
        </div>
        {children}
        <div className="dm-sans" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <FooterBar />
        </div>

      </body>
    </html>
  );
}
