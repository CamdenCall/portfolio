import { DM_Sans } from "next/font/google"
import Header from "@/components/Header/Header";
import "@/styles/global.scss"

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
})
export default function Home() {
  return (
    <html className={dm_sans.className}>
      <body>
        <Header />
      </body>
    </html>

  );
}
