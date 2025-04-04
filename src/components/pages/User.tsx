import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSkillByUserId, getUserById } from "../../utils/supabaseFunction";
import { Users } from "../../domain/users";
import { User_skill } from "../../domain/user_skill";

export const User: FC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [Loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Users | null>(null);
  const [skill, setSkill] = useState<User_skill | null>(null);

  //-- データをフェッチ
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      const [userData, skillData] = await Promise.all([
        getUserById(id),
        getSkillByUserId(id),
      ]);
      setUser(userData);
      setSkill(skillData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>ID：{id}</h1>
      {Loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
      <div>
        {skill === null ? (
          <p>スキルが見つかりませんでした</p>
        ) : (
          <div key={skill.id}>
            <p>{skill.skill_id}</p>
          </div>
        )}
      </div>
    </>
  );
});
