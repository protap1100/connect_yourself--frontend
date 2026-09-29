import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  return (
    <div>
      Hello world
      <br></br> 
      Blog<Link href={"/blogs"}>Blogs</Link>
      <LikeButton></LikeButton>
    </div>
  )
}
