import Content from '../components/Content'
import TitleContent from '../components/TitleContent'

function Users() {
  const addProduct = () => {
    console.log('test')
  }
  const actions = [
    {
      actionName: 'Add Prodcut',
      onClick: addProduct,
      style: 'button-primary',
      icon: null,
    },
  ]
  return (
    <Content>
      <TitleContent title='Usuarios' actions={actions} />
    </Content>
  )
}

export default Users
