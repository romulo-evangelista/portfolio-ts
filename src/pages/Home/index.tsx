import { Header } from '../../components/Header';

import './index.css';

export function Home () {
  return (
    <div className="home">
      <Header />

      <div className="content">
        <div className="title-group">
          <p className="title">Rômulo Evangelista</p>
          <span className="subtitle">Desenvolvedor Full Stack</span>
        </div>

        <div id="splash">
          <svg width="639" height="506" viewBox="0 0 639 506" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M639 88.3619V506H0C70.2218 401.434 220.389 473.58 191.402 285.217C162.414 96.8543 263.87 192.771 338.896 186.277C413.922 179.783 420.742 144.313 432.678 64.8823C444.614 -14.5489 558.859 -36.5298 639 88.3619Z" fill="#8E44AD"/>
          </svg>
        </div>
      </div>
    </div>
  );
}