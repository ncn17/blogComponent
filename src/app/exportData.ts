interface PostType {
    title: string;
    content: string;
    loveIts: number;
    created_at?: Date;
 }

export class Post {
    private post: PostType;

    constructor(p: PostType) {
      this.post = p;
      this.post.created_at = new Date();
    }

    get postData() {
      return this.post;
    }
    set postData(p: PostType) {
      this.post = p;
    }
}