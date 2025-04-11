import { FC, memo } from 'react'
import { Skills } from '../../../domain/skills';
import { Box, Stack, Text } from "@chakra-ui/react";

type Props = {
  skill: Skills | undefined;
};

export const UserSkill: FC<Props> = memo((props) => {
  const { skill } = props;
  return (
    <Box p={4}>
      <Stack spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          スキル
        </Text>
        <Text
          bg={"black"}
          px={5}
          borderRadius="100px"
          w={"fit-content"}
          fontSize="lg"
          fontWeight="bold"
          color={"white"}
        >
          {skill ? skill.name : "スキルの設定なし"}
        </Text>
      </Stack>
    </Box>
  );
});