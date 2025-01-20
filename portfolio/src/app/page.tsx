import { DM_Sans } from "next/font/google"
import "@/styles/global.scss"

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
})
export default function Home() {
  return (
    <html className={dm_sans.className}>
      <body>
        <div>test</div>
      </body>
    </html>

  );
}
