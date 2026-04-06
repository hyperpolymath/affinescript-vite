import gameLogic from './logic.as';

document.querySelector('#app').innerHTML = `
  <h1>AffineScript + Vite</h1>
  <p>Status: Game logic loaded!</p>
  <pre>${gameLogic}</pre>
`;
