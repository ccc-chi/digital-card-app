import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'

export const User: FC = memo(() => {
  const {id} = useParams<{id: string}>();
  return(
    <h1>ID：{id}</h1>
  )
})