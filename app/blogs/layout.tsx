import React from "react";

const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      BlogsLayout is a speical type of layout that is only designed for blog
      page
      {children}
    </div>
  );
};

export default BlogsLayout;
