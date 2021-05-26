import logo from './logo.svg';
import './App.css';
import Container from './Components/Container/index';
import Footer from './Components/Footer/index';
import Header from './Components/Header/index';
import Navbar from './Components/Navbar/index';

function App() {
  return (
    <div className="App">
      <Container>
        <Header>React Portfolio for Timothy Kuebler</Header>
        <Navbar />
        <Footer>React Portfolio</Footer>
      </Container>
    </div>
  );
}

export default App;
