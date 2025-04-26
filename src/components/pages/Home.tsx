import { FC, memo, useState } from "react";

import { Box, Input, Stack, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClickPushPage();
  };

  const onClickPushPage = () => {
    const checkUserId = /^[a-zA-Z0-9_-]+$/.test(userId);
    if (!checkUserId) {
      setError(true);
      return;
    }
    navigate(`/cards/${userId}`);
  };

  const onClickPushRegister = () => {
    navigate(`/cards/register`);
  };

  return (
    <>
      <Text
        data-testid="appTitle"
        fontSize={"xl"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        デジタル名刺アプリ
      </Text>
      <Box bg={"white"} p={4} borderRadius={"md"} mt={4}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} py={5}>
            <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
              IDを入力して表示
            </Text>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="IDを入力"
              data-testid="userIdHome"
              type="text"
            />
            {error && (
              <Text color="red.500" fontSize="sm" data-testid="errorUserIdHome">
                入力は英数字のみです
              </Text>
            )}
            <PrimaryButton
              type="submit"
              disabled={userId === ""}
              data-testid="homeSubmitButton"
            >
              名刺を見る
            </PrimaryButton>
          </Stack>
        </form>
      </Box>
      <Box mt={10} w={"60%"} mx={"auto"}>
        <PrimaryButton
          bg={"teal.500"}
          onClick={onClickPushRegister}
          data-testid="registerButton"
        >
          新規登録はこちら
        </PrimaryButton>
      </Box>
    </>
  );
});
