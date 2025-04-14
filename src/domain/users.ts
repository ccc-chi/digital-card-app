import { User_skill } from "./user_skill";

export class Users {
  constructor(
    public user_id: string,
    public name: string,
    public description: string,
    public github_id: string,
    public qiita_id: string,
    public x_id: string,
    public github_url: string,
    public qiita_url: string,
    public x_url: string,
    public created_at: string,
    public user_skill: User_skill[]
  ) {}

  public static newUsers(users: {
    user_id: string;
    name: string;
    description: string;
    github_id: string;
    qiita_id: string;
    x_id: string;
    created_at: string;
    user_skill: User_skill[];
  }): Users {
    const github_url = `https://github.com/${users.github_id}`;
    const qiita_url = `https://qiita.com/${users.qiita_id}`;
    const x_url = `https://x.com/${users.x_id}`;
    return new Users(
      users.user_id,
      users.name,
      users.description,
      users.github_id,
      users.qiita_id,
      users.x_id,
      github_url,
      qiita_url,
      x_url,
      users.created_at,
      users.user_skill
    );
  }
}