import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
    title: "Fikz",
    description: "Fikz Fikz Fikz",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/logo.svg' />
            </head>
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
