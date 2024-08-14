import { Comment } from "./Comment";

export interface Post {
  id: string;
  content: string;
  user: string;
  created_at: string;

  comments: Comment[];
}
