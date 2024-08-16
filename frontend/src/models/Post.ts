import { Comment } from "./Comment";

export interface Post {
  id: string;
  content: string;
  user: string;
  created_at: string;
  user_name: string;
  comments: Comment[];
}
