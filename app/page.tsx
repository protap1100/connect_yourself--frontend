import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world
      <br></br>
      Blog<Link href={"/blogs"}>Blogs</Link>
    </div>
  )
}
