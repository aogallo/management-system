import Content from '@components/Content'

function NoMatchRouteError() {
  return (
    <Content>
      <section className='error-content'>
        <h2>Oops!</h2>
        <span>go back</span>
      </section>
    </Content>
  )
}

export default NoMatchRouteError
