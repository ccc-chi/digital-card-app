export class Users {
  constructor(
    public user_id: string,
    public name: string,
    public description: string,
    public github_id: string,
    public qiita_id: string,
    public X_id: string,
    public created_at: Date
  ) {}
}