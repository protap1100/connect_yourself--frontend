import DislikeButton from "@/app/ui/DislikeButton";
import React from "react";

const BlogSulgPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>
    BlogSlugpage :{slug}
    <DislikeButton blogSlug={slug}></DislikeButton>
  </div>;
};

export default BlogSulgPage;
