import PostCard from "./PostCard";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
  return (
    <PostCard>
      {" "}
      <Skeleton className="h-11 w-12 rounded-full" />
      <div className="flex w-full flex-col space-y-2">
        <div className="mb-4 flex-col space-y-2">
          <Skeleton className="h-4 w-[66%] rounded-md" />
          <Skeleton className="h-4 w-[75%] rounded-md" />
          <Skeleton className="h-4 w-[50%] rounded-md" />
        </div>
        <div className="flex w-full justify-between pr-12">
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
        </div>
      </div>
    </PostCard>
  );
};

export default PostSkeleton;
