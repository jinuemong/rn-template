// Post entity 타입 정의
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  comments: number;
  tags: string[];
  isPublished: boolean;
}

export interface PostStatus {
  isLiked: boolean;
  isBookmarked: boolean;
  isShared: boolean;
}

export interface PostCategory {
  id: string;
  name: string;
  description?: string;
} 