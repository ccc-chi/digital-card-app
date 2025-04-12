import { FC, memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { getSkillTable, getUserById } from "../../utils/supabaseFunction";
import { Users } from "../../domain/users";
import { Skills } from "../../domain/skills";
import { UserSkill } from "../organisms/user/UserSkill";
import { UserInfo } from "../organisms/user/UserInfo";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export const User: FC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Users | null>(null);
  const [skillList, setSkillList] = useState<Skills[] | null>(null);

  //-- データをフェッチ
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const [userData, skillTable] = await Promise.all([
          getUserById(id),
          getSkillTable(),
        ]);
        setUser(userData);
        setSkillList(skillTable);
        console.log("userData", userData);
        // console.log("skillTable", skillTable);
      } catch (error) {
        console.log("fetchData-error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  //-- スキルを検索
  const matchSkillName = useMemo(() => {
    return skillList?.find((item) => item.id === user?.user_skill[0]?.skill_id);
  }, [skillList, user]);
  console.log("matchSkillName", matchSkillName);

  if (loading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
        <Text fontWeight={"bold"}>Loading...</Text>
      </Flex>
    );
  }
  return (
    <Box pt={8}>
      <Box
        bg={"white"}
        px={4}
        py={10}
        borderRadius="md"
        boxShadow="md"
        w={"90%"}
        minW={"300px"}
        maxW={"600px"}
        mx={"auto"}
      >
        {user ? (
          <Stack>
            <UserInfo user={user} />
            <UserSkill skill={matchSkillName} />
          </Stack>
        ) : (
          <p>ユーザーが見つかりませんでした</p>
        )}
      </Box>
    </Box>
  );
});
