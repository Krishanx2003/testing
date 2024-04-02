/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X1pwpRCumDJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <nav className="bg-white shadow flex flex-col w-[250px] space-y-6 py-4 px-3">
      <Button className="text-left">Create new Studio</Button>
      <p className="text-xs font-semibold uppercase text-gray-500 px-3">Explore</p>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Featured
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Trending
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Recent
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        All studios
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Educational
      </Link>
      <p className="text-xs font-semibold uppercase text-gray-500 px-3">Categories</p>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Blogs
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Papers
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Tutorials
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Workflows
      </Link>
      <p className="text-xs font-semibold uppercase text-gray-500 px-3">Tools</p>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Data processing
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Endpoints
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Training
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Serving
      </Link>
      <p className="text-xs font-semibold uppercase text-gray-500 px-3">Types</p>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Other
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Model types
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Audio
      </Link>
      <Link className="block px-3 py-1.5 text-sm hover:bg-gray-100" href="#">
        Image
      </Link>
    </nav>
  )
}

