import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users'
import Table from './Table'
import Dashboard from '../pages/Dashboard'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'
import NoMatchRouteError from '../pages/NoMatchRouteError'

export const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    age: 37,
    phone: '1-770-736-8031 x56442',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    age: 43,
    phone: '010-692-6593 x09125',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    age: 68,
    phone: '1-463-123-4447',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    age: 29,
    phone: '493-170-9623 x156',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    age: 31,
    phone: '(254)954-1289',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    age: 71,
    phone: '1-477-935-8478 x6430',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    age: 24,
    phone: '210.067.6132',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    age: 14,
    phone: '586.493.6943 x140',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    age: 24,
    phone: '(775)976-6794 x41206',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    age: 38,
    phone: '024-648-3804',
  },
]

const Layout = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tratamient-plan' element={<Table data={data} />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/*' element={<NoMatchRouteError />} />
      </Routes>
    </main>
  )
}

export default Layout
