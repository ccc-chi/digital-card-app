import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";
import { Users } from "../../../domain/users";

type Props = {
  user: Users;
};

export const UserInfo: FC<Props> = memo((props) => {
  const { user } = props;
  return (
    <Box>
      <p>カード</p>
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
    </Box>
  );
});
