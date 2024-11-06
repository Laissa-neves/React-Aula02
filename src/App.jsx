import Curso from './components/Curso';
import Botao from './components/Botao';
import Aluno from './components/Aluno';
import Tarefa from './components/Tarefa';
import Carro from './components/Carro';
import "./index.css";
import Caixa from './components/Caixa';
import Button from './components/Button';
import AppClasse from './components/AppClasse';

export default function App() {
  const texto = {
    color: "violet",
    fontSize: "2em",
  };

  return (
    <div>
      <Curso nome = "React"/>
      <Botao texto = "React"/>
      <Aluno nome = " Laíssa Neves" idade = " 26" profissao = " Desenvolvedora" />
      <Tarefa titulo = "Criar componente" descricao="Props" estado={false} /> 
      <Carro modelo = "HB20" ano = {2024}/>
      <h1>Tipos de Estilo</h1>
      <p>Estilo no arquivo</p>
      <h2 style={{ color:"pink", fontSize: "4em" }}>Estilo inline</h2>
      <h2 style={texto}>Estilo incorporado</h2>
      {/*<Caixa cor="magenta"/> */}

      <Button />
      <button className="button">Clique Aqui2</button>
      <AppClasse curso = "React Class"/>
    </div>
  );
}

