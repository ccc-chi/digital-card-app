import { FC, memo } from 'react'

import { Box } from '@chakra-ui/react'

export const UserCard: FC = memo(() => {
  return(
    <Box bg={'white'} p={4} borderRadius="md" boxShadow="md">
      <p>カード</p>
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
        {matchSkillName === undefined ? (
          <p>スキルが見つかりませんでした</p>
        ) : (
          <div>
            <p>{matchSkillName?.name}</p>
          </div>
        )}
      </div>

    </Box>
  )
})