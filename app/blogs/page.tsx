import { cacheLife } from "next/cache";
import { getBlogs } from "../service/getBlogs";
import MyServerComponents from "../ui/MyServerComponents";

const BlogsPage = async () => {
  "use cache";
  cacheLife("hours");
  const posts = await getBlogs();
  console.log(posts);
  return (
    <div>
      BlogsPage
      {posts.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      ))}
      <MyServerComponents></MyServerComponents>
    </div>
  );
};

export default BlogsPage;
