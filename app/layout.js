import "./globals.css";
import { Poppins } from "next/font/google";
import { Menu } from "../components/Menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "CRM Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
