import "./globals.css";
import { Rubik } from "next/font/google";

//components
import Navbar from "./components/NavBar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Next App One",
  description: "Building next app one",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
