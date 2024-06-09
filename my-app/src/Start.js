import React from "react";
var programa, num, tentativa, pontos;

// eslint-disable-next-line no-unused-vars
var gabarito = new Array(5);

var gabarito021 = ["B", "A", "A", "D", "C"];
var gabarito022 = ["B", "D", "A", "A", "D"];

function Start() {
  const iniciar = () => {
    programa = prompt("Digite o número do programa(021 a 026): ", "");

    // eslint-disable-next-line eqeqeq
    if (programa == "021") gabarito = gabarito021;
    // eslint-disable-next-line eqeqeq
    else if (programa == "022") gabarito = gabarito022;
    else {
      alert("Esse programa não existe!");
      return;
    }

    pontos = 0;
    num = 1;
    tentativa = 1;

    atualizarVisor();

    document.getElementById("respostas").style.display = "block";
  };

  const atualizarVisor = () => {
    document.getElementById("visor1").innerText = `${programa} -> ${num}: `;
    document.getElementById("visor2").innerText = `Tentativa ${tentativa} de 3`;
  };

  const resposta = (resposta) => {
    const respostaCorreta = gabarito[num - 1];
    if (resposta === respostaCorreta) {
      pontos++;
      num++;
      tentativa = 1;
      alert("Resposta Correta");
      console.log(pontos);
    } else {
      tentativa++;
      alert("Respota errada");
      if (tentativa > 3) {
        alert(`Fim do jogo! Você fez ${pontos} pontos.`);
        // Desabilita os campos de resposta
        document.getElementById("respostas").style.display = "none";
      }
    }

    atualizarVisor();
  };

  return (
    <div>
      <p id="visor1">{`${programa} -> ${num}: `}</p>
      <p id="visor2">{`Tentativa ${tentativa} de 3`}</p>
      <div id="respostas" style={{ display: "none" }}>
        <p>
          <input
            type="button"
            value="A"
            id="botaoA"
            onClick={() => resposta("A")}
          ></input>
          <input
            type="button"
            value="B"
            id="botaoB"
            onClick={() => resposta("B")}
          ></input>
          <input
            type="button"
            value="C"
            id="botaoC"
            onClick={() => resposta("C")}
          ></input>
          <input
            type="button"
            value="D"
            id="botaoD"
            onClick={() => resposta("D")}
          ></input>
        </p>
      </div>
      <input
        type="button"
        id="botaoStart"
        value="Start/Reset Jogo"
        onClick={iniciar}
      ></input>
    </div>
  );
}

export default Start;
