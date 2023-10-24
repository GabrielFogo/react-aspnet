import React from 'react'
import AtividadeCard from "./AtividadeCard";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ) => (
        <AtividadeCard
          key={ativ.id}
          ativ={ativ}
          deletarAtividade={props.deletarAtividade}
          pegarAtividade={props.pegarAtividade}
        />
      ))}
    </div>
  )
}
