import { DM_Sans } from "next/font/google"
import Header from "@/components/Header/Header";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Languages from "@/components/Languages/Languages";
import Socials from "@/components/Socials/Socials";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import "@/styles/global.scss"

export const metadata: Metadata = {
  title: "Camden C.",
  description: "UI/UX Designer & Fullstack Web Developer",
  openGraph: {
    images: ['images/profile.png'],
  },
  icons: [
    { rel: "icon", url: "images/favicon.png" },
  ],
  keywords: ["Camden C.", "Web Developer", "UI/UX Designer", "Fullstack Developer", "Utah Web Developer", "Freelancer", "Portfolio"],
  metadataBase: new URL("https://camdev.codes")
}

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
})



export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <Projects />
      <Languages />
      <Socials />
      <Footer />
    </>
  );
}
