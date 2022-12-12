'use client'
import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient()
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
        <body className="flex flex-col">
        <Navbar/>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        <Footer/>
        </body>
        </html>
    )
}
