import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-16">

      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight">⚡ Crus CTF</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A hub for my CTF writeups, practice challenges, and curated resources to level up in
          cybersecurity. Learn, practice, and compete — all in one place.
        </p>
        <div className="flex justify-center gap-6 pt-6">
          <Button asChild variant="outline" size="lg">
            <Link href="/writeups">Browse Writeups</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/challenges">Try Challenges</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resources">Get Resources</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold">Why Crus CTF?</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Whether you're a beginner or a seasoned hacker, we provide structured learning, challenges,
          and resources to level up your cybersecurity skills.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>🚀 Fast Learning</CardTitle>
              <CardDescription>Step-by-step writeups and tutorials for rapid skill improvement.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary">
                <Link href="/writeups">Explore Writeups</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>🎯 Practice Challenges</CardTitle>
              <CardDescription>Test your knowledge with small to advanced CTF challenges.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary">
                <Link href="/challenges">Try Challenges</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>📚 Resources</CardTitle>
              <CardDescription>Curated tools, cheat sheets, and guides for every hacker.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary">
                <Link href="/resources">Get Resources</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Latest Writeups */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center">Latest Writeups</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>CTF Challenge #{item}</CardTitle>
                <CardDescription>A short description of what this writeup covers.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary">
                  <Link href={`/writeups/${item}`}>Read Writeup</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About / Newsletter */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Stay Updated</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Subscribe to our newsletter to get notified about new writeups, challenges, and tools.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          />
          <Button>Subscribe</Button>
        </div>
      </div>

      {/* Testimonials / Community */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center">What People Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {["Alice", "Bob", "Charlie"].map((user) => (
            <Card key={user} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{user}</CardTitle>
                <CardDescription>"Crus CTF has helped me improve my hacking skills massively!"</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
