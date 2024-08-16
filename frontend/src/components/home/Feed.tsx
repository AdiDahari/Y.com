"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Post } from "@/models/Post";
import PostCard from "../posts/PostCard";
import PostForm from "@/components/home/PostForm";
import PostSkeleton from "../posts/PostSkeleton";
import { getPosts } from "@/lib/api";

const Feed = () => {
  const [currentFeed, setCurrentFeed] = useState("for-you");

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <Tabs
      defaultValue="for-you"
      className="flex h-full w-full flex-col border-2"
    >
      <TabsList className="w-full bg-transparent py-8">
        <div className="flex w-full">
          <TabsTrigger
            className="text-md w-full border border-secondary"
            value="for-you"
            onClick={() => setCurrentFeed("for-you")}
          >
            <p
              className={`border-b-4 py-4 text-center transition-colors ${currentFeed === "for-you" ? "border-teal-700" : "border-transparent"}`}
            >
              For you
            </p>
          </TabsTrigger>
          <TabsTrigger
            className="text-md w-full border border-secondary"
            value="following"
            onClick={() => setCurrentFeed("following")}
          >
            <p
              className={`border-b-4 py-4 text-center transition-colors ${currentFeed === "following" ? "border-teal-700" : "border-transparent"}`}
            >
              Following
            </p>
          </TabsTrigger>
        </div>
      </TabsList>
      <PostForm />
      <TabsContent value="for-you">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </TabsContent>
      <TabsContent value="following">
        {Array.from({ length: 3 }).map((_, i) => (
          <PostSkeleton key={i} />
        ))}{" "}
      </TabsContent>
    </Tabs>
  );
};

export default Feed;
