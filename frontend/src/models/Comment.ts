export interface Comment {
  id: string;
  post: string;
  content: string;
  createdAt: Date;
  user: string;

  replies: Comment[];
}
