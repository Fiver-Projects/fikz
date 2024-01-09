import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
    title: "Fikz",
    description: "I willz Fikz Youz Houz witz my Toolz",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/logo.svg' />
            </head>
            <body className={poppins.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
