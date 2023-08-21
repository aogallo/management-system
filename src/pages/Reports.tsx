import Content from '@components/Content'
import TitleContent from '@components/TitleContent'

function Reports() {
  const addProduct = () => {
    console.log('test')
  }
  const actions = [
    {
      actionName: 'Crear reporte',
      onClick: addProduct,
      style: 'button-primary',
      icon: null,
    },
  ]

  return (
    <Content>
      <TitleContent title='Reportes' actions={actions} />
    </Content>
  )
}

export default Reports
