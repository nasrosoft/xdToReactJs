import Sidebar from './components/Sidebar';
import BodyConainer from './components/BodyConainer';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <BodyConainer />
      </div>
    </div>
  );
};

export default App;
