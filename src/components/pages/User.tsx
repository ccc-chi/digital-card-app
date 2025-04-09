import { FC, memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { getSkillTable, getUserById } from "../../utils/supabaseFunction";
import { Users } from "../../domain/users";
import { Skills } from "../../domain/skills";

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
            <p>
              {user.github_id && (
                <a href={user.github_url} target="_blank">
                  GIT HUB：{user.github_id}
                </a>
              )}
            </p>
            <p>
              {user.X_id && (
                <a href={user.X_id} target="_blank">
                  X：{user.X_id}
                </a>
              )}
            </p>
            <p>
              {user.qiita_id && (
                <a href={user.qiita_url} target="_blank">
                  Qiita：{user.qiita_id}
                </a>
              )}
            </p>
          </div>
        )}
      </div>
      <div>
        {matchSkillName === undefined ? (
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
