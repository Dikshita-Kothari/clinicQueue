import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Layout from './components/layout'
import Dashboard from './pages/dashboard'
import User from './pages/user'
import Logout from './pages/logout'
import Clinic from './pages/clinic'
import Bookings from './pages/booking'
import Appointments from './pages/appointments'

function App() {

  return (
    <>
      {/* <AuthProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/clinic" element={<Clinic />}></Route>
              <Route path="/appointents" element={<Bookings />}></Route>
              <Route path="/myappointents" element={<Appointments />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  )
}

export default App
