import Content from '../components/Content'
import { data } from '../components/Layout'
import SubTitle from '../components/SubTitle'
import Table from '../components/Table'

function Dashboard() {
  return (
    <Content style='dashboard-content'>
      <section className='card'>
        <SubTitle title='Resumen de citas' />
        <section className='summary-appoitment'>
          <div className='summary-item'>
            <span className='material-symbols-outlined'>today</span>
            <div className='summary-item__data'>
              <h4>3</h4>
              <span>pendientes</span>
            </div>
          </div>
          <div className='summary-item'>
            <span className='material-symbols-outlined'>event</span>
            <div className='summary-item__data'>
              <h4>4</h4>
              <span>mañana</span>
            </div>
          </div>
          <div className='summary-item'>
            <span className='material-symbols-outlined'>event_upcoming</span>
            <div className='summary-item__data'>
              <h4>43</h4>
              <span>proxima semana</span>
            </div>
          </div>
        </section>
      </section>
      <section className='card'>
        <SubTitle title='Resumen de inventario' />
        <section className='summary-appoitment'>
          <h4>3</h4>
          <span>guantes</span>
          <h4>4</h4>
          <span>anestesia</span>
          <h4>43</h4>
          <span>cafe</span>
        </section>
      </section>
      <section className='card'>
        <SubTitle title='Sales and Purchase' />
      </section>
      <section className='card'>
        <SubTitle title='Product Summary' />
      </section>
      <section className='card'>
        <SubTitle title='Proximas citas' />
        <Table data={data} />
      </section>
      <section className='card'>
        <SubTitle title='Sales and Purchase' />
      </section>
    </Content>
  )
}

export default Dashboard
