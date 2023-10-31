import { useEffect, useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from './api/atividade';

function App() {
  const [index] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState({ id: 0 });

  const pegarTodasAtividades = async () => {
    const response = await api.get('atividade')
    return response.data;
  }

  useEffect(() => {
    const getAtividades = async() => {
      const todasAtividades = await pegarTodasAtividades()
      if (todasAtividades) setAtividades(todasAtividades)
    }
    getAtividades()
  }, [])

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index }])
  }


  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividade => atividade.id === id)
    setAtividadeSelecionada(atividade[0])
  }

  function cancelarAtividade() {
    setAtividadeSelecionada({ id: 0 })
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
    setAtividadeSelecionada({ id: 0 })
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
        ativSelecionada={atividadeSelecionada}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
