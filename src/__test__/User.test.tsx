import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Users } from "../domain/users";
import { User_skill } from "../domain/user_skill";
import { Skills } from "../domain/skills";
import { Router } from "../router/Router";


const userSkill: User_skill[] = [
  {
    id: 1,
    user_id: "abc",
    skill_id: 1,
    created_at: "2023-01-01", 
  },
];

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
    userSkill
  ),
];

const skillList: Skills[] = [
  {
    id: 1,
    name: "React",
  },
];

jest.mock("../utils/supabaseFunction", () => {
  return {
    getUserById: jest.fn(() => Promise.resolve(userData[0])),
    getSkillTable: jest.fn(() => Promise.resolve(skillList)),
  };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
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
 * Userのテスト
 */
describe("名刺カードのテスト", () => {

  beforeEach(() => {
    renderPage();
  });
  const user = userEvent.setup();

  test("名前が表示されている（ページ遷移ができる）", async () => {
    const input = await screen.findByTestId("userIdHome");
    const button = await screen.findByTestId("homeSubmitButton");
    await user.type(input, "abc");
    await user.click(button);

    const title = await screen.findByTestId("userName");
    expect(title).toBeInTheDocument();
  });

  test("自己紹介が表示されている", async () => {  
    const desc = await screen.findByTestId("userDescription");
    expect(desc).toBeInTheDocument();
  });

  test("技術が表示されている", async () => {  
    const skill = await screen.findByTestId("userSkill");
    expect(skill).toBeInTheDocument();
  });

  test("Githubアイコンが表示されている", async () => {  
    const github = await screen.findByTestId("github");
    expect(github).toBeInTheDocument();
  });

  test("Qiitaのアイコンが表示されている", async () => {  
    const qiita = await screen.findByTestId("qiita");
    expect(qiita).toBeInTheDocument();
  });

  test("Twitterのアイコンが表示されている", async () => {  
    const x = await screen.findByTestId("x");
    expect(x).toBeInTheDocument();
  });

  test("戻るボタンをクリックすると/に遷移する", async () => {  
    const button = await screen.findByTestId("backButton");

    expect(button).toBeInTheDocument();
    await user.click(button);

    const title = await screen.findByTestId("appTitle");
    expect(title).toBeInTheDocument();
  });
});
