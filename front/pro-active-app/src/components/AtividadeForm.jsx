import { useEffect, useState } from 'react';
import { BsPlusCircle, BsBookmark } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im'

const atividadeInicial = {
  titulo: '',
  id: 0,
  descricao: '',
  prioridade: 0
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual())

  useEffect(() => {
    if (props.ativSelecionada.id !== 0) {
      setAtividade(props.ativSelecionada)
    }
  }, [props.ativSelecionada])

  const inputTextHandler = (e) => {
    const { name, value } = e.target
    setAtividade({ ...atividade, [name]: value })
    console.log(atividade)
  }

  const handleCancelar = (e) => {
    e.preventDefault()
    props.cancelarAtividade()
    setAtividade(atividadeInicial)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.ativSelecionada.id !== 0) {
      props.atualizarAtividade(atividade)
    }
    else {
      props.addAtividade(atividade)
    }

    setAtividade(atividadeInicial)
  }

  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) {
      return props.ativSelecionada
    }
    else {
      return atividadeInicial
    }
  }
  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
      <form className="mt-1 row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            name="titulo"
            onChange={inputTextHandler}
            value={atividade.titulo}
            id="titulo"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="prioridade" className="form-label">
            Prioridade
          </label>
          <select
            name="prioridade"
            onChange={inputTextHandler}
            value={atividade.prioridade}
            id="prioridade"
            className="form-select"
          >
            <option value="0">Selecione uma opção...</option>
            <option value="Baixa">Baixa</option>
            <option value="Normal">Normal</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="col-md-12">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            name="descricao"
            onChange={inputTextHandler}
            value={atividade.descricao}
            id="descricao"
            className="form-control"
          />
        </div>

        <div>
          {
            atividade.id === 0 ?
              <button className="btn btn-outline-secondary" type='submit'>
                <BsPlusCircle className='me-1' />Adicionar
              </button>
              :
              <>
                <button className="btn btn-outline-primary me-1" type="submit">
                  <BsBookmark /> Salvar
                </button><button className="btn btn-outline-warning" onClick={handleCancelar}>
                  <ImBlocked /> Cancelar
                </button>
              </>
          }
        </div>
      </form>
    </>
  );
}
