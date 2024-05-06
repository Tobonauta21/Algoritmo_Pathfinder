
// Função para lidar com o envio do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Captura os valores selecionados nos selects
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;

    // Exibe os resultados da busca
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h1>Resultado da Busca</h1><p>Ponto de Partida: ${inicio}</p><p>Ponto de Destino: ${fim}</p>`;
    // Aqui você pode chamar a função de busca e exibir os resultados
  });