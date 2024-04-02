/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SlOZ7wwn7e4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="bg-black text-white">
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-8">
            <h1 className="text-3xl font-bold">LAB GENIUS</h1>
            <nav className="flex space-x-4">
              <Link className="hover:underline" href="#">
                Blog
              </Link>
              <Link className="hover:underline" href="#">
                Find Projects
              </Link>
              <Link className="hover:underline" href="#">
                About Us
              </Link>
              <Link className="hover:underline" href="#">
                Community
              </Link>
              <Link className="hover:underline" href="#">
                Resources
              </Link>
            </nav>
          </div>
          <Button className="bg-white text-black hover:bg-gray-200">Sign In</Button>
        </div>
      </header>
      <div className="border-t border-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-2">
            <Badge variant="secondary">Reinforcement Learning</Badge>
            <Badge variant="secondary">Artificial Intelligence</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Computer Vision</Badge>
            <Badge variant="secondary">Deep Learning</Badge>
            <Badge variant="secondary">Natural Language Processing</Badge>
            <Badge variant="secondary">Frontend</Badge>
          </nav>
        </div>
      </div>
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold">Blog</h2>
        </div>
      </main>
    </div>
  )
}

