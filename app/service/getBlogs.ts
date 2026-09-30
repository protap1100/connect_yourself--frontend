import { cacheLife, revalidateTag } from "next/cache";

export const getBlogs = async () => {
  "use cache";
  cacheLife("hours");
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // method: "POST",
    cache: "force-cache",
    next: {
      revalidate: Infinity,
      tags: ["posts"],
    },
  });
  console.log(posts);
  const postData = await posts.json();
  console.log(postData);
  return postData;
};

const renewBlogCache = async () => {
  revalidateTag("posts","max");
  revalidateTag("posts", {
    expire: 60 * 60 * 24 * 7,
  });
};
