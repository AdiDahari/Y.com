import React, { Children } from "react";

type PostCardProps = {
  children: React.ReactNode;
};

const PostCard = ({ children }: PostCardProps) => {
  return (
    <div className="flex space-x-4 border-b py-4 pl-6 pr-4">{children}</div>
  );
};

export default PostCard;
