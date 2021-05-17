import logo from './logo.svg';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

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
