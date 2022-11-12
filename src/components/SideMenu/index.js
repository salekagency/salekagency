import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "/",
      label: 'home'
    },
    {
      key: "/client",
      label: 'Client'
    },
    // {
    //   key: "order-history",
    //   label: 'Order History'
    // },
    // {
    //   key: "settings",
    //   label: 'Settings'
    // }
  ];
  
  return (
    <Menu class='center' items={menuItems} onClick={(menuItem) => navigate(menuItem.key)}/>
  )
};

export default SideMenu;