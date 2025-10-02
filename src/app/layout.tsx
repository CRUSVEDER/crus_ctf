import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import ModeToggle from "@/components/ui/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crus CTF",
  description: "Writeups, challenges, and resources for cybersecurity & CTFs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}><head /><body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <header className="border-b bg-background">
          <nav className="container mx-auto flex items-center justify-between py-4">
            <h1 className="text-xl font-bold"><Link href="/">⚡ Crus CTF</Link></h1>
            <div className="flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem><NavigationMenuLink asChild><Link href="/">Home</Link></NavigationMenuLink></NavigationMenuItem>
                  <NavigationMenuItem><NavigationMenuLink asChild><Link href="/writeups">Writeups</Link></NavigationMenuLink></NavigationMenuItem>
                  <NavigationMenuItem><NavigationMenuLink asChild><Link href="/challenges">Challenges</Link></NavigationMenuLink></NavigationMenuItem>
                  <NavigationMenuItem><NavigationMenuLink asChild><Link href="/resources">Resources</Link></NavigationMenuLink></NavigationMenuItem>
                  <NavigationMenuItem><NavigationMenuLink asChild><Link href="/dashboard">Dashboard</Link></NavigationMenuLink></NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <ModeToggle />
            </div>
          </nav>
        </header>

        <main className="container mx-auto py-8 min-h-[80vh]">{children}</main>

        <footer className="border-t bg-background py-4 text-center text-sm text-muted-foreground">
          <p>Built by Crus • Powered by Next.js & shadcn/ui</p>
          <p>Crusveder</p>
        </footer>
      </ThemeProvider>
    </body></html>
  )
}
