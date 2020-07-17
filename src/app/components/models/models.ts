export interface User{
  id: number ;
  name: string ;
  username: string;
}
export interface Post{

  id: number;
  userId: number;
  title: string;
  body: string;

}
export interface Comment{
  postId: number;
  id: number;
  name: string;
  email: any;
  body: string;

}

