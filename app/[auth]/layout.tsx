import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      AuthLayout is a speical type of layout that is only designed for blog
      page
      {children}
    </div>
  );
};

export default AuthLayout;
