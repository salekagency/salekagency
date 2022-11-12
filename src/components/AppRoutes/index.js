import { Routes, Route } from "react-router-dom";
import Home from '../../modules/Home';
import Client from '../../modules/Client';
import ClientPage from '../../modules/ClientPage'
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/client" element={<Client />} />
      <Route path="clientPage/:id" element={<ClientPage />} />
          {/*<Route path="menu" element={<RestaurantMenu />} />
        <Route path="menu/create" element={<CreateMenuItem />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="settings" element={<Settings />} /> */}
      </Routes>
    );
  }; 
  
  export default AppRoutes;