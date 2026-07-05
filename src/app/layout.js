import Script from "next/script"
import localFont from "next/font/local"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

const rockwell = localFont({
  src: "../fonts/ROCK.ttf",
  variable: "--font-rockwell",
})

const rockwellBold = localFont({
  src: "../fonts/ROCKBOLD.ttf",
  variable: "--font-rockwell-bold",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-montserrat",
})

const siteTitle = "Digitage Studio — Advertising/Marketing"
const siteDescription = "We create a trendy legacy"

export const metadata = {
  metadataBase: new URL("http://digitagestudio.com"),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Eslam Hesham" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "http://digitagestudio.com/",
    images: [
      "https://res.cloudinary.com/eslamhesham/image/upload/v1615234506/Screenshot_55_t16rpj.png",
    ],
  },
  twitter: {
    card: "summary",
    creator: "@eslamheshamm",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/logo.png",
  },
}

export const viewport = {
  themeColor: "#FFD349",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rockwell.variable} ${rockwellBold.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body
        className="font-body m-0 w-full"
        style={{ backgroundColor: "#292929" }}
      >
        <ScrollReveal />
        <Header siteTitle={siteTitle} />
        <main className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">{children}</main>
        <Footer />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k7zbh2xpdn");
          `}
        </Script>
      </body>
    </html>
  )
}
