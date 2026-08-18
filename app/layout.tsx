import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Meet Dholu | Backend Developer",description:"Portfolio of Meet Dholu — BCA graduate focused on backend and full-stack development."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}