import { FC, memo } from 'react'
import { Skills } from '../../../domain/skills';
import { Box } from '@chakra-ui/react';

type Props = {
  skill: Skills | undefined;
}

export const UserSkill: FC<Props> = memo((props) => {
  const { skill } = props;
  return(
    <Box>
      <p>スキル</p>
      <div>
        <p>
          {skill ? skill.name : 'スキルの設定なし'}
        </p>
      </div>
    </Box>
  )
})