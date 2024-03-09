import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Homepage from '../pages/Homepage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  )
}
