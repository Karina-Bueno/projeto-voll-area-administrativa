import './App.css';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Título from './components/Título';
import Cabecalho from './components/cabecalho/indx';
import Tabela from './components/Tabela/index';
import useDadosConsulta from './useDadosConsulta';

function App() {
 const { dados, erro } = useDadosConsulta();
  return (
    <>
      <Cabecalho />
      <Container>
        <Título>Área Administrativa</Título>
        <Tabela consultas={dados}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App; 
