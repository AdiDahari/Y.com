"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PostForm from "@/components/home/PostForm";
import { getPosts } from "@/lib/api";

const Feed = () => {
  const [currentFeed, setCurrentFeed] = useState("for-you");

  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
    });
  });

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
              className={`border-b-4 py-4 text-center transition-colors ${currentFeed === "for-you" ? "border-blue-500" : "border-transparent"}`}
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
              className={`border-b-4 py-4 text-center transition-colors ${currentFeed === "following" ? "border-blue-500" : "border-transparent"}`}
            >
              Following
            </p>
          </TabsTrigger>
        </div>
      </TabsList>
      <PostForm />
      <TabsContent value="for-you">
        <p>For you</p>
      </TabsContent>
      <TabsContent value="following">
        <p>Following</p>
      </TabsContent>
    </Tabs>
  );
};

export default Feed;
