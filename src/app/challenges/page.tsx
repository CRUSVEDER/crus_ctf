import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ChallengesPage() {
  const challenges = [
    { id: 1, title: "Basic Web Hack", desc: "Practice simple web vulnerabilities." },
    { id: 2, title: "Buffer Overflow", desc: "Learn memory exploitation basics." },
    { id: 3, title: "Crypto Puzzle", desc: "Solve cryptography-based challenges." },
    { id: 4, title: "Steganography Fun", desc: "Hidden messages in images." },
  ];

  return (
    <section className="space-y-12 px-4 md:px-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">🎯 Challenges</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Solve interactive challenges from beginner to advanced levels. Sharpen your hacking skills!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <Card key={c.id} className="hover:shadow-lg transition p-6 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl">{c.title}</CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/challenges/${c.id}`}>Start Challenge</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
