import React from 'react';
import { Menu } from '../../components/Menu';

import './index.css';

export function Home () {
  return (
    <div className="home">
      <Menu />

      <div className="title-group">
        <p className="title">Rômulo <br/>Evangelista</p>
        <span className="subtitle">DESENVOLVEDOR</span>
      </div>
    </div>
  );
}