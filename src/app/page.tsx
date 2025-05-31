import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl text-center space-y-6 text-balance">
        <h1 className="text-3xl font-bold">Infinite Scroll with React Query</h1>
        <Button asChild size="lg">
          <Link href="/comments">View Comments Demo</Link>
        </Button>
      </main>
    </div>
  )
}
