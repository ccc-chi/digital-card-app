import { FC, memo } from 'react'

type Props = {
  children: string;
}
export const HtmlText: FC<Props> = memo((props) => {
  const { children } = props;
  return(
    <div
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  )
})