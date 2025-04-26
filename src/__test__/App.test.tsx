import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Users } from "../domain/users";
import { Router } from "../router/Router";

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

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => ({ id: "abc" })),
}));

const renderPage = () => {
  return render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

/*
 * Home
 */
describe("トップページ", () => {
  beforeEach(() => {
    renderPage();
  });
  const user = userEvent.setup();

  test("タイトルが表示されている", async () => {
    const title = screen.getByTestId("appTitle");
    expect(title).toBeInTheDocument();
  });

  test("IDを入力してボタンを押すと/cards/:idに遷移する", async () => {
    const input = await screen.findByTestId("userIdHome");
    const button = await screen.findByTestId("homeSubmitButton");
    await user.type(input, "abc");
    await user.click(button);

    const title = await screen.findByTestId("userName");
    expect(title).toBeInTheDocument();
  });

  test("IDを入力しないとボタンは押せない", async () => {
    const backButton = await screen.findByTestId("backButton");
    await user.click(backButton);

    const button = await screen.findByTestId("homeSubmitButton");
    expect(button).toBeDisabled();
  });

  test("IDの入力が日本語のときエラーが出る", async () => {
    const input = await screen.findByTestId("userIdHome");
    const button = await screen.findByTestId("homeSubmitButton");
    await user.type(input, "あいうえお");
    await user.click(button);

    const error = await screen.findByTestId("errorUserIdHome");
    expect(error).toBeInTheDocument();
  });

  test("新規登録はこちらを押すと/cards/registerに遷移する", async () => {
    const button = await screen.findByTestId("registerButton");
    await user.click(button);

    const title = await screen.findByTestId("registerTitle");
    expect(title).toBeInTheDocument();
  });
});
