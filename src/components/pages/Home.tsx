import { FC, memo } from 'react'

import { Button } from '@chakra-ui/react'

export const Home: FC = memo(() => {
  return(
    <>
    <h1>ホーム画面です</h1>
    <h2 data-testid="appTitle">デジタル名刺アプリ</h2>
      <Button>ボタン</Button>
    </>
  )
})