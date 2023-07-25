type SubTitleProps = {
  title: string
}

function SubTitle({ title }: SubTitleProps) {
  return <h4 className='subtitle-medium'>{title}</h4>
}

export default SubTitle
