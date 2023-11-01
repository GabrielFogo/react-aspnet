import { useEffect, useState } from "react"
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import { Modal } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs"
import api from './api/atividade';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState({ id: 0 });
  const [atividadeModal, setAtividadeModal] = useState(false);
  const [deletarModal, setDeletarModal] = useState(false)
  const toggleAtividadeModal = () => setAtividadeModal(!atividadeModal);
  const toggleDeletarModal = () => setDeletarModal(!deletarModal);

  const pegarTodasAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;
  }

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegarTodasAtividades();
      if (todasAtividades) setAtividades(todasAtividades);
    }
    getAtividades();
  }, []);

  const addAtividade = async (ativ) => {
    const response = await api.post('atividade', ativ);
    console.log(response.data);
    setAtividades([...atividades, response.data]);
    toggleAtividadeModal();
  }

  const deletarAtividade = async (id) => {
    if (await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
      toggleDeletarModal()
    }
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividadeSelecionada(atividade[0]);
    toggleAtividadeModal();
  }

  const cancelarAtividade = () => {
    setAtividadeSelecionada({ id: 0 })
    toggleAtividadeModal()
  }

  const novaAtividade = () => {
    setAtividadeSelecionada({ id: 0 })
    toggleAtividadeModal()
  }

  const atualizarAtividade = async (ativ) => {
    const response = await api.put(`atividade/${ativ.id}`, ativ)
    const { id } = response.data

    setAtividades(
      atividades.map((atividade) => (atividade.id === id ? response.data : atividade))
    )
    setAtividadeSelecionada({ id: 0 })
    toggleAtividadeModal()
  }

  return (
    <>
      <header className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
        <h1 className="p-0 m-0">Atividade {atividadeSelecionada.id !== 0 ? atividadeSelecionada.id : ''}</h1>
        <button className="btn btn-outline-secondary d-inline-flex align-items-center" onClick={novaAtividade}>
          < BsPlusCircle />
        </button>
      </header>
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
        toggleDeletarModal={toggleDeletarModal}
        deletarModal={deletarModal}
      />

      <Modal show={atividadeModal} onHide={toggleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title><h1 className="p-0 m-0">Atividade {atividadeSelecionada.id !== 0 ? atividadeSelecionada.id : ''}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            atividades={atividades}
            ativSelecionada={atividadeSelecionada}
            atualizarAtividade={atualizarAtividade}
            cancelarAtividade={cancelarAtividade}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
