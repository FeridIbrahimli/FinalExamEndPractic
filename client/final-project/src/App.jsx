import './App.css'
import {ROUTES} from './routes/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
