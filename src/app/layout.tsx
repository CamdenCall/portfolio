import { DM_Sans } from "next/font/google"
import "@/styles/global.scss"

const dm_sans = DM_Sans({
    subsets: ["latin"],
    variable: "--dm-sans",
  })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className={dm_sans.className}>{children}</body>
      </html>
    );
  }
  