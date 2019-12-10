import React from 'react';
import './home.scss';
import PromiseCardApp from './PromiseCardApp';

function Home(props) {
  return (
    <section className="main">
      <div className="app">
        <h2 className="title">Create your Promise Card!</h2>
        <div className="cta-adv">
          <h3>Who is gifting me something this christmas?</h3>
        </div>
        <PromiseCardApp />
      </div>
    </section>
  );
}

export default Home;
