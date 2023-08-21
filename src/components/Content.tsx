import { MainContent } from './MainContent'

type ContentProsType = {
  children: React.ReactNode
  style?: string
}

function Content({ children, style }: ContentProsType) {
  return (
    <MainContent>
      <div className={`content ${style ? style : ''}`}>{children}</div>
    </MainContent>
  )
}

export default Content
