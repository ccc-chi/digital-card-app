import { FC, memo } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

import { Users } from "../../../domain/users";
import { HtmlText } from "../../atoms/HtmlText";

type Props = {
  user: Users;
};

export const UserInfo: FC<Props> = memo((props) => {
  const { user } = props;
  return (
    <Box>
      {user === null ? (
        <p>ユーザーが見つかりませんでした</p>
      ) : (
        <Stack px={4}>
          <Text fontSize="2xl" fontWeight="bold" data-testid="userName">
            {user.name}
          </Text>
          <Box
            borderTopWidth={2}
            borderBottomWidth={2}
            py={4}
            borderColor={"gray.200"}
            minH={100}
            data-testid="userDescription"
          >
            <HtmlText>{user.description}</HtmlText>
          </Box>
          {(user.github_id || user.x_id || user.qiita_id) && (
            <Box mt={2}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                SNS
              </Text>
              <Flex gap={2} alignItems="stretch">
                {user.github_id && (
                  <Box as="a" href={user.github_url} target="_blank">
                    <Flex
                      gap={2}
                      alignItems="center"
                      borderWidth={1}
                      px={4}
                      borderRadius="md"
                      h={"45px"}
                      data-testid="github"
                    >
                      <FaGithub size={20} />
                      GitHub
                    </Flex>
                  </Box>
                )}
                {user.x_id && (
                  <Box as="a" href={user.x_url} target="_blank">
                    <Flex
                      gap={2}
                      alignItems="center"
                      borderWidth={1}
                      px={4}
                      borderRadius="md"
                      h={"45px"}
                      data-testid="x"
                    >
                      <FaXTwitter size={20} />
                    </Flex>
                  </Box>
                )}
                {user.qiita_id && (
                  <Box as="a" href={user.qiita_url} target="_blank">
                    <Flex
                      gap={2}
                      alignItems="center"
                      borderWidth={1}
                      px={4}
                      borderRadius="md"
                      h={"45px"}
                      data-testid="qiita"
                    >
                      <SiQiita size={34} />
                    </Flex>
                  </Box>
                )}
              </Flex>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
});
