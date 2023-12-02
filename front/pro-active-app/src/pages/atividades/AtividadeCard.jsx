import { BsFillTrashFill, BsFillBrushFill, BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs'
import { Modal } from "react-bootstrap";

export default function AtividadeCard(props) {

    function prioridadeLabel(prioridade) {
        switch (prioridade) {
            case 'Baixa':
            case 'Normal':
            case 'Alta':
                return prioridade
            default:
                return 'não defenido'
        }
    }

    function prioridadeEstilo(prioridade, icon) {
        switch (prioridade) {
            case "Baixa":
                return icon ? <BsEmojiSmile /> : 'success'
            case "Normal":
                return icon ? <BsEmojiNeutral /> : 'black'
            case "Alta":
                return icon ? <BsEmojiFrown /> : 'danger'
            default:
                return ''
        }
    }

    return (
        <>
        <div key={props.ativ.id} className={"card mb-2 border-" + prioridadeEstilo(props.ativ.prioridade)}>
            <div className="d-flex justify-content-between card-header">
                <h5 className=" card-title ">
                    <span className={" badge bg-black"}>{props.ativ.id}</span> - {props.ativ.titulo}
                </h5>
                <h6>
                    Prioridade:
                    <span className={"ms-1 me-1 text-" + prioridadeEstilo(props.ativ.prioridade)}>
                        {prioridadeEstilo(props.ativ.prioridade, true)} {prioridadeLabel(props.ativ.prioridade)}
                    </span>
                </h6>
            </div>
            <div className="card-body">
                <p className="card-text">
                    {props.ativ.descricao}
                </p>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary me-2" onClick={() => props.pegarAtividade(props.ativ.id)}>
                        <BsFillBrushFill /> Editar
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => props.toggleDeletarModal()}>
                        <BsFillTrashFill /> Deletar
                    </button>
                </div>
            </div>
        </div>
        <Modal show={props.deletarModal} onHide={props.toggleDeletarModal}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Deletar Atividade "{props.ativ.titulo}" ?</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="btn btn-outline-success me-1" onClick={() => props.deletarAtividade(props.ativ.id)}>Sim</button>
          <button className="btn btn-danger" onClick={props.toggleDeletarModal}>Não</button>
        </Modal.Body>
      </Modal>
      </>
    )
}
