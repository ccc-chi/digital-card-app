import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Users } from "../domain/users";

const userData: Users[] = [
  new Users(
    "abc",
    "name1",
    "description1",
    "github_id1",
    "qiita_id1",
    "X_id1",
    "github_url1",
    "qiita_url1",
    "X_url1",
    "2023-01-01",
    []
  ),
];
jest.mock("../utils/supabaseFunction", () => {
  return {
    getUserById: jest.fn(() => Promise.resolve(userData[0])),
    getSkillTable: jest.fn(() => Promise.resolve([])),
  };
});



/*
 * サンプルテスト
 */
describe("サンプルテスト", () => {
  test("[正常系]サンプルテスト", async () => {
    // 実行
    render(<App />);
    const title = screen.getByTestId("appTitle");

    // 検証
    expect(title).toBeInTheDocument();
  });
});
