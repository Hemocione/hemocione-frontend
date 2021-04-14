import Link from 'next/link'
import { MenuItem } from '..'

const MenuItems = () => {
  return (
    <div>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/who' text='Quem Somos' />
      <MenuItem link='/where' text='Onde e Quando' />
      <MenuItem link='/faq' text='Dúvidas Frequentes' />
    </div>
  );
}

export default MenuItems
