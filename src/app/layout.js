import { Cinzel, Cinzel_Decorative, Fraunces, Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../sections/Navbar";
import Footer from "@/sections/Footer";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})
export const fraunces = Fraunces({
  weight: ["400", "700", "900"]
})



// const colors = []

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
