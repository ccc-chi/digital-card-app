import { FC, memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getSkillByUserId,
  getSkillTable,
  getUserById,
} from "../../utils/supabaseFunction";
import { Users } from "../../domain/users";
import { User_skill } from "../../domain/user_skill";
import { Skills } from "../../domain/skills";

export const User: FC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Users | null>(null);
  const [skill, setSkill] = useState<User_skill | null>(null);
  const [skillList, setSkillList] = useState<Skills[] | null>(null);

  //-- データをフェッチ
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      const [userData, skillData, skillTable] = await Promise.all([
        getUserById(id),
        getSkillByUserId(id),
        getSkillTable(),
      ]);
      setUser(userData);
      setSkill(skillData);
      setSkillList(skillTable);
      setLoading(false);
      console.log("userData", userData);
      console.log("skillTable", skillTable);
      console.log("skillData", skillData);
    };
    fetchData();
  }, [id]);
  const matchSkillName = useMemo(() => {
    return skillList?.find((item) => item.id === skill?.skill_id);
  }, [skillList, skill]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>ID：{id}</h1>
      <div>
        {user === null ? (
          <p>ユーザーが見つかりませんでした</p>
        ) : (
          <div key={user.user_id}>
            <p>{user.name}</p>
            <p>{user.description}</p>
            <p>{user.github_id}</p>
            <p>{user.X_id}</p>
            <p>{user.qiita_id}</p>
          </div>
        )}
      </div>
      <div>
        {skill === null ? (
          <p>スキルが見つかりませんでした</p>
        ) : (
          <div>
            <p>{matchSkillName?.name}</p>
          </div>
        )}
      </div>
    </>
  );
});
