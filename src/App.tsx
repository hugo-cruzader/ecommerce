import {Routes, Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'
import {CheckoutPage} from "./pages/checkout/CheckoutPage.tsx";
import {OrdersPage} from "./pages/OrdersPage.tsx";
import {TrackingPage} from "./pages/TrackingPage.tsx";
import {NotFoundPage} from "./pages/notfound/NotFoundPage.tsx";

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="checkout" element={<CheckoutPage />}/>
      <Route path="orders" element={<OrdersPage />}/>
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
