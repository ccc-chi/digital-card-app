import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

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
