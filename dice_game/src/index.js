import ReactDOM from 'react-dom';

// render 메소드는 화면을 그린다는 뜻
ReactDOM.render(
  <>
  <h1 id="title">가위바위보</h1>
  <button className="hand">가위</button>
  <button className="hand">바위</button>
  <button className="hand">보</button>
  </>,
  document.getElementById('root')
);
