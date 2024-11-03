import Link from "next/link"

export function Container({url, title, description}) {
    return (
        <div className="relative overflow-hidden rounded-lg border border-[#1e1e1e] p-2 text-left hover:bg-[#1e1e1e] duration-300">
        <div className="flex h-44 flex-col justify-between rounded-md p-6 ">
        <Link href={url}>
          <div className="space-y-2 text-white">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="font-medium">{description}</p>
          </div>
          </Link>
        </div>
      </div>
    )
}