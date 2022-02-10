import logo from './logo.svg';



import './style.css';

const MyHeader = () => {
  return (
    <div className="header">
        <h1>List of suggestions </h1>
    </div>
  );
}
const Items = () => {
  return (
    <div className="product_list">
        <h2>suggestion 1</h2>
        <h2>suggestion 2</h2>  
        <h2>suggestion 3</h2>
        <h2>suggestion 4</h2>
        <h2>suggestion 5</h2>  
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <MyHeader />
      <Items />
    </div>
  );
}

export default App;
