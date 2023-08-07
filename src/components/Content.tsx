type ContentProsType = {
  children: React.ReactNode
  style?: string
}

function Content({ children, style }: ContentProsType) {
  return <div className={`content ${style ? style : ''}`}>{children}</div>
}

export default Content
