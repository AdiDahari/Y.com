import { ChartColumn, Heart, MessageCircle, Recycle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/models/Post";
import PostSkeleton from "./PostSkeleton";
import React from "react";

type PostCardProps = {
  post?: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  if (!post) {
    return (
      <div className="flex space-x-4 border-b py-4 pl-6 pr-4">
        <PostSkeleton />
      </div>
    );
  }

  return (
    <div className="flex space-x-4 border-b py-4 pl-6 pr-4">
      <Image
        src="/assets/user-placeholder.jpeg"
        alt="user"
        width={48}
        height={48}
        className="size-10 rounded-full"
      />
      <div className="flex w-full flex-col space-y-2">
        <div className="mb-4 mt-2 flex-col space-y-2">
          <Link
            href={`/${post.user_name}`}
            className="font-bold hover:underline"
          >
            @{post.user_name}
          </Link>
        </div>
        <div className="mb-4 flex-col space-y-2">{post.content}</div>
        <div className="flex w-full justify-between pr-12 text-sm">
          <p className="flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-blue-400 hover:bg-opacity-15 hover:text-blue-400">
            <MessageCircle className="size-4" /> {post.comments.length}
          </p>
          <p className="flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-green-400 hover:bg-opacity-15 hover:text-green-400">
            <Recycle className="size-4" /> {post.comments.length}
          </p>
          <p className="flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-red-400 hover:bg-opacity-15 hover:text-red-400">
            <Heart className="size-4" /> {post.comments.length}
          </p>
          <p className="flex items-center gap-1 rounded-full p-2 transition-colors hover:bg-yellow-400 hover:bg-opacity-15 hover:text-yellow-400">
            <ChartColumn className="size-4" /> {post.comments.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
