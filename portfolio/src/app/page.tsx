import { DM_Sans } from "next/font/google"
import Header from "@/components/Header/Header";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Languages from "@/components/Languages/Languages";
import Socials from "@/components/Socials/Socials";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import { Metadata } from "next";
import "@/styles/global.scss"

export const metadata: Metadata = {
  title: "Camden C. | Web Developer",
  description: "UI/UX Designer & Fullstack Web Developer",
  icons: [
    { rel: "icon", url: "/images/favicon.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
}

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
})



export default function Home() {
  return (
    <html className={dm_sans.className}>
      <body>
        <PageWrapper>
          <Header />
          <Experience />
          <Projects />
          <Languages />
          <Socials />
        </PageWrapper>
      </body>
    </html>
  );
}
