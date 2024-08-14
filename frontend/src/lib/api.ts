import { Post } from "@/models/Post";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:8000/api/posts/");
  const data: Post[] = await response.json();
  return data;
}
