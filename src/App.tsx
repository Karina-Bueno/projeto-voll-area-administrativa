import './App.css';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Título from './components/Título';
import Cabecalho from './components/cabecalho/indx';
import Tabela from './components/Tabela/index';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';
import useDadosProfissional from './useDadosProfissional';

function App() {
 const { dados: consultas, erro: consultasErro } = useDadosConsulta();
 const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

 if (consultasErro || profissionaisErro) {
     console.log("Ocorreu um erro na requisição");
     
 }

  return (
    <>
      <Cabecalho />
      <Container>
        <Título>Área Administrativa</Título>
        <Tabela consultas={consultas}/>
        <Grafico consultas={consultas} profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App; 
