import { Menu as AntMenu } from 'antd';

import './index.css';

export const Menu = () => (
  <AntMenu mode="horizontal" className="menu-container" style={{borderBottom: 'none'}}>
    <AntMenu.Item className="menu-item">
      Sobre mim
    </AntMenu.Item>

    <AntMenu.Item className="menu-item">
      Projetos
    </AntMenu.Item>

    <AntMenu.Item className="menu-item">
      Skills
    </AntMenu.Item>  
  </AntMenu>
);

