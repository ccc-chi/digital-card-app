import { User_skill } from "./user_skill";

export class Users {
  constructor(
    public user_id: string,
    public name: string,
    public description: string,
    public github_id: string,
    public qiita_id: string,
    public X_id: string,
    public github_url: string,
    public qiita_url: string,
    public X_url: string,
    public created_at: Date,
    public user_skill: User_skill[]
  ) {}

  public static newUsers(users: {
    user_id: string;
    name: string;
    description: string;
    github_id: string;
    qiita_id: string;
    X_id: string;
    created_at: Date;
    user_skill: User_skill[];
  }): Users {
    const github_url = `https://github.com/${users.github_id}`;
    const qiita_url = `https://qiita.com/${users.qiita_id}`;
    const X_url = `https://x.com/${users.X_id}`;
    return new Users(
      users.user_id,
      users.name,
      users.description,
      users.github_id,
      users.qiita_id,
      users.X_id,
      github_url,
      qiita_url,
      X_url,
      users.created_at,
      users.user_skill
    );
  }
}