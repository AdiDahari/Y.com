import { Post } from "@/models/Post";
import { PostCreateRequest } from "@/types/post-create";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:8000/api/posts/");
  const data: Post[] = await response.json();
  return data;
}

export async function createPost({
  content,
}: PostCreateRequest): Promise<Post> {
  const response = await fetch("http://localhost:8000/api/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
  const data: Post = await response.json();
  return data;
}
