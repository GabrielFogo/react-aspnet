import React from 'react'
import { BsFillTrashFill, BsFillBrushFill, BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs'

export default function AtividadeCard(props) {
    function prioridadeLabel(prioridade) {
        switch (prioridade) {
            case "1":
                return 'Baixa'
            case "2":
                return 'Normal'
            case "3":
                return "Alta"
            default:
                return 'não defenido'
        }
    }

    function prioridadeEstilo(prioridade, icon) {
        switch (prioridade) {
            case "1":
                return icon ? <BsEmojiSmile /> : 'success'
            case "2":
                return icon ? <BsEmojiNeutral /> : 'black'
            case "3":
                return icon ? <BsEmojiFrown /> : 'danger'
            default:
                return ''
        }
    }

    return (
        <div key={props.ativ.id} className={"card mb-2 border-" + prioridadeEstilo(props.ativ.prioridade)}>
            <div className="d-flex justify-content-between card-header">
                <h5 className=" card-title ">
                    <span className={" badge bg-secondary"}>{props.ativ.id}</span> - {props.ativ.titulo}
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
                    <button className="btn btn-outline-danger" onClick={() => props.deletarAtividade(props.ativ.id)}>
                        <BsFillTrashFill /> Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}
