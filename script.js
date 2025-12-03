document.addEventListener('DOMContentLoaded', function() {

    console.log("✅ Script.js carregado e DOM pronto!");

    // 1. Vamos ver se estamos encontrando os contêineres dos cards.
    const cardContainers = document.querySelectorAll('.card-container');
    
    if (cardContainers.length > 0) {
        console.log(`✅ Encontrados ${cardContainers.length} elementos com a classe '.card-container'. Eles são:`, cardContainers);
    } else {
        console.error("❌ ERRO CRÍTICO: Não foi encontrado NENHUM elemento com a classe '.card-container'. Verifique o HTML.");
        return; // Para o script se não encontrar nada.
    }

    // 2. Vamos adicionar o evento e ver se o clique é registrado.
    cardContainers.forEach(function(container, index) {
        
        console.log(`🔧 Adicionando evento de clique ao Card Container #${index + 1}`);

        container.addEventListener('click', function() {
            
            console.log(`✅ CLIQUE DETECTADO no Card Container #${index + 1}!`);

            // 3. Agora, vamos ver se encontramos o elemento '.card' dentro dele.
            const cardElement = this.querySelector('.card');
            
            if (cardElement) {
                console.log("✅ Encontrado o elemento filho '.card' para girar.", cardElement);
                
                // 4. Finalmente, vamos tentar adicionar a classe e verificar.
                console.log("🔧 Tentando adicionar/remover a classe 'flipped'...");
                cardElement.classList.toggle('flipped');
                
                if (cardElement.classList.contains('flipped')) {
                    console.log("👍 SUCESSO: A classe 'flipped' foi ADICIONADA. O card deveria ter girado.");
                } else {
                    console.log("👍 SUCESSO: A classe 'flipped' foi REMOVIDA. O card deveria ter voltado ao normal.");
                }

            } else {
                console.error("❌ ERRO CRÍTICO: O clique foi detectado, mas NÃO foi encontrado um elemento filho com a classe '.card' para girar.");
            }
        });
    });
});

// Script do Carrossel Automático
let slideCounter = 1; // Renomeei para não confundir com outras variáveis

setInterval(() => {
    // Marca o 'radio button' correspondente ao próximo slide
    document.getElementById("slide" + slideCounter).checked = true;
    
    // Incrementa o contador para o próximo slide
    slideCounter++;

    // Se o contador passar do último slide (4), ele volta para o primeiro (1)
    if (slideCounter > 4) {
        slideCounter = 1;
    }
}, 5000); // 5000 milissegundos = 5 segundos
