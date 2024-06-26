import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "เติมเกมของแทร่ 100%",
  description: "เติมเกมของแทร่ 100%",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
        </link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
