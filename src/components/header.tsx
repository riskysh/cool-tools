import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
    return (
      <header className="w-full flex items-center justify-between px-20 py-6 max-sm:px-10">
          <Link href="/">
              <h1 className="text-3xl font-semibold">Cool Tools</h1>
          </Link>
          <div className="flex gap-3 max-sm:gap-2">
                  <ModeToggle />
          </div>
      </header>
    )
  }