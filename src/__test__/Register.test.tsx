import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Router } from "../router/Router";


jest.mock("../utils/supabaseFunction", () => {
  return {
    addUser: jest.fn(() => Promise.resolve())
  };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  
}));

const renderPage = () => {
  return render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

/*
 * Registerのテスト
 */
describe("名刺カードのテスト", () => {
  beforeEach(() => {
    renderPage();
  });
  const user = userEvent.setup();

  test("名前が表示されている（ページ遷移ができる）", async () => {
    const button = await screen.findByTestId("registerButton");
    await user.click(button);

    const title = await screen.findByTestId("registerTitle");
    expect(title).toBeInTheDocument();
  });

  test("IDがないときにエラーメッセージがでる", async () => {
    const submitButton = await screen.findByTestId("registerSubmitButton");
    await user.click(submitButton);
    const error = await screen.findByTestId("userIdError");
    expect(error).toBeInTheDocument();
  });

  test("名前がないときにエラーメッセージがでる", async () => {
    const submitButton = await screen.findByTestId("registerSubmitButton");
    await user.click(submitButton);
    const error = await screen.findByTestId("nameError");
    expect(error).toBeInTheDocument();
  });

  test("紹介分がないときにエラーメッセージがでる", async () => {
    const submitButton = await screen.findByTestId("registerSubmitButton");
    await user.click(submitButton);
    const error = await screen.findByTestId("descriptionError");
    expect(error).toBeInTheDocument();
  });

  test("スキルの選択がないときにエラーメッセージがでる", async () => {
    const submitButton = await screen.findByTestId("registerSubmitButton");
    await user.click(submitButton);
    const error = await screen.findByTestId("skillError");
    expect(error).toBeInTheDocument();
  });

  test("必須を入力して登録ボタンを押すと/に遷移する", async () => {
    const userIdInput = await screen.findByTestId("userIdInput");
    const nameInput = await screen.findByTestId("nameInput");
    const descriptionInput = await screen.findByTestId("descriptionInput");
    const skillSelect = await screen.findByTestId("skillSelect");
    const submitButton = await screen.findByTestId("registerSubmitButton");

    await user.type(userIdInput, "testUserId");
    await user.type(nameInput, "testName");
    await user.type(descriptionInput, "testDescription");
    await user.selectOptions(skillSelect, "1");
    await user.click(submitButton);

    const title = await screen.findByTestId("appTitle");
    expect(title).toBeInTheDocument();
  });

  test("全項目入力して登録ボタンを押すと/に遷移する", async () => {
    const button = await screen.findByTestId("registerButton");
    await user.click(button);

    const userIdInput = await screen.findByTestId("userIdInput");
    const nameInput = await screen.findByTestId("nameInput");
    const descriptionInput = await screen.findByTestId("descriptionInput");
    const skillSelect = await screen.findByTestId("skillSelect");
    const githubIdInput = await screen.findByTestId("githubIdInput");
    const xIdInput = await screen.findByTestId("xIdInput");
    const qiitaIdInput = await screen.findByTestId("qiitaIdInput");
    const submitButton = await screen.findByTestId("registerSubmitButton");

    await user.type(userIdInput, "testUserId");
    await user.type(nameInput, "testName");
    await user.type(descriptionInput, "testDescription");
    await user.selectOptions(skillSelect, "1");
    await user.type(githubIdInput, "testGithub");
    await user.type(xIdInput, "testXId");
    await user.type(qiitaIdInput, "testQiitaId");

    await user.click(submitButton);

    const title = await screen.findByTestId("appTitle");
    expect(title).toBeInTheDocument();
  });
});
