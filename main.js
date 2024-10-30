//animação quando carregar a pagina 
    window.addEventListener('load', () => {
        const elementosParaAnimar = document.querySelectorAll('.main-animation'); 

        elementosParaAnimar.forEach((elemento, index) => {
            elemento.classList.add('animate__animated', 'animate__slideInUp'); // Aplica a animação
            elemento.style.setProperty('--animate-delay', `${index * 0.5}s`); // Adiciona delay
        });
    });






   // Função para verificar se o elemento está visível na tela (parcialmente ou totalmente)
   function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Verificar se alguma parte do elemento está visível
    const verticalVisible = rect.top < windowHeight && rect.bottom > 0;
    const horizontalVisible = rect.left < windowWidth && rect.right > 0;

    return verticalVisible && horizontalVisible;
  }

  // Função para adicionar a classe 'show' quando o elemento estiver visível
  function handleScrollAnimation() {
    const animatedItems = document.querySelectorAll('.animate-up, .animate');

    animatedItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add('show');
      }
    });
  }

  // Espera o DOM estar completamente carregado para executar a função
  document.addEventListener('DOMContentLoaded', () => {
    // Executa a função uma vez no início para verificar a posição inicial dos elementos
    handleScrollAnimation();

    // Adiciona eventos de scroll e resize
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);
  });

  // Configuração do Intersection Observer para seções específicas
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Inicia ambas as animações simultaneamente (substituir pelas suas funções reais)
        typewriterAnimation(text1, typewriterText1);
        typewriterAnimation(text2, typewriterText2);

        // Impede que a animação ocorra mais de uma vez
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,  // Apenas 10% do elemento precisa estar visível para disparar
    rootMargin: '0px 0px -100px 0px' // Expande a área de detecção
  });




//Contador
  
  const counterEl = document.querySelector('.num');
  const counterEll = document.querySelector('.num1');
  
  let counterNumber1 = 0;
  let counterNumber2 = 0;
  
  // Delays diferentes para cada contador (em milissegundos)
  const delay1 = 70;  // .num
  const delay2 = 40; // .num1
  
  // Função para atualizar o primeiro contador
  const updateCounter1 = setInterval(function () {
    counterNumber1++;
    counterEl.textContent = counterNumber1;
  
    if (counterNumber1 >= 200) {
      clearInterval(updateCounter1);
    }
  }, delay1);
  
  // Função para atualizar o segundo contador
  const updateCounter2 = setInterval(function () {
    counterNumber2++;
    counterEll.textContent = counterNumber2;
  
    if (counterNumber2 >= 300) {
      clearInterval(updateCounter2);
    }
  }, delay2);


