import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WriteupsPage() {
  const writeups = [
    { id: 1, title: "Web Exploitation 101", desc: "Learn XSS, SQLi, and other web attacks." },
    { id: 2, title: "Reverse Engineering Basics", desc: "Intro to RE using simple binaries." },
    { id: 3, title: "Crypto Challenges", desc: "Decode cryptography puzzles and flags." },
  ];

  return (
    <section className="space-y-12 px-4 md:px-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">📜 Writeups</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse detailed walkthroughs of CTF challenges to understand techniques, exploits, and tools.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {writeups.map((w) => (
          <Card key={w.id} className="hover:shadow-lg transition p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl">{w.title}</CardTitle>
              <CardDescription>{w.desc}</CardDescription>
            </div>
            <CardContent>
              <Button asChild variant="secondary">
                <Link href={`/writeups/${w.id}`}>Read Writeup</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
