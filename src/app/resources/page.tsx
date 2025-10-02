import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    { id: 1, title: "Cheat Sheets", desc: "Quick references for common CTF techniques." },
    { id: 2, title: "Tools", desc: "Curated tools for web, crypto, and reverse challenges." },
    { id: 3, title: "Guides", desc: "Step-by-step tutorials for beginners." },
    { id: 4, title: "Scripts", desc: "Automate repetitive tasks for CTFs." },
  ];

  return (
    <section className="space-y-12 px-4 md:px-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">📚 Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access curated cheat sheets, tools, and guides to improve your CTF skills efficiently.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Card key={r.id} className="hover:shadow-lg transition p-4 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl">{r.title}</CardTitle>
              <CardDescription>{r.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 mt-auto">
              <Button asChild variant="secondary" size="sm">
                <Link href={`/resources/${r.id}`}>View</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/resources/${r.id}/download`}>Download</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
