import React from 'react';
import { Header } from '../../components/Header';

import './index.css';

export function Home () {
  return (
    <div className="home">
      <Header />

      <div className="title-group">
        <p className="title">Rômulo Evangelista</p>
        <span className="subtitle">Desenvolvedor Full Stack</span>
      </div>
    </div>
  );
}