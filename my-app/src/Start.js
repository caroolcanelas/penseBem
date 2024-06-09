// eslint-disable-next-line no-unused-vars
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
      iniciar();
    }

    pontos = 0;
    num = 1;
    tentativa = 1;

    document.getElementById("visor1").value = `${programa} -> ${num}: `;
    document.getElementById("visor2").value = `Tentativa ${tentativa} de 3`;
  };

  return (
    <input
      type="button"
      id="botaoStart"
      value="Start/Reset Jogo"
      onClick={iniciar}
    ></input>
  );
}

export default Start;
