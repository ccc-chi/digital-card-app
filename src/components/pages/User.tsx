import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserById } from "../../utils/supabaseFunction";
import { Users } from "../../domain/users";

export const User: FC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<Users | null>(null);
  const [Loading, setLoading] = useState<boolean>(true);

  //-- データをフェッチ
  useEffect(() => {
    const getUser = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      const data = await getUserById(id);
      setUser(data);
      setLoading(false);
    };
    getUser();
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
    </>
  );
});
