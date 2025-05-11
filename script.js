window.onload = () => {
    const card = document.getElementById('card');
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const mensagem = document.getElementById('mensagem');
  
    // 1. Gira a carta após 2s
    setTimeout(() => {
      card.classList.add('flipped');
  
      // 2. Após virar, abre o envelope
      setTimeout(() => {
        flap.classList.add('open');
  
        // 3. Após abrir a aba, sobe a carta e começa a digitação
        setTimeout(() => {
          letter.classList.add('show');
  
          const texto = "Mamãe, neste dia especial quero lhe lembrar do quanto a senhora é amada. Obrigado por cada cada cuidado (até demais) e cada oração, a senhora é a melhor mãe que eu poderia ter (nenhuma outra iria me aturar). Te amo mamãe!";
          let index = 0;
          mensagem.innerText = "";
  
          const intervalo = setInterval(() => {
            mensagem.innerText += texto.charAt(index);
            index++;
            if (index === texto.length) {
              clearInterval(intervalo);
            }
          }, 40);
        }, 1000); // Espera aba abrir
      }, 1000); // Espera carta virar
    }, 2000); // Espera aparecer frente
  };

  document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('flip');
  });

