import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './Content';
// import Task from './components/Task';


function App() {
  const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
  return (
    <div className='App'>
      {/* <ol>
        {tarefas.map((tarefas) => Task(tarefas))}
      </ol> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
