type ContentProsType = {
  children: React.ReactNode
}

function Content({ children }: ContentProsType) {
  return <div className='content table-content'>{children}</div>
}

export default Content
