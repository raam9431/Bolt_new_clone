import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ThemeProvider } from "next-themes";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-zinc-900">
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
