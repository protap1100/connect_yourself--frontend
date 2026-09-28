import React from "react";

const BlogSulgPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>BlogSulgPage : {slug} </div>;
};

export default BlogSulgPage;
