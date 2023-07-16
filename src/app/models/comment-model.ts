export interface CommentModel {
  id: number;
  post_id: number;
  user_id: number;
  comment: string;
  creation_date: Date;
  is_confirmed: boolean;
}
