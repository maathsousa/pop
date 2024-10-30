//animação quando carregar a pagina 
    window.addEventListener('load', () => {
        const elementosParaAnimar = document.querySelectorAll('.main-animation'); 

        elementosParaAnimar.forEach((elemento, index) => {
            elemento.classList.add('animate__animated', 'animate__slideInUp'); // Aplica a animação
            elemento.style.setProperty('--animate-delay', `${index * 0.5}s`); // Adiciona delay
        });
    });






// Função para verificar se o elemento está visível na tela


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  
  // Função para adicionar a classe 'show' quando o elemento estiver visível

  
  function handleScrollAnimation() {
    const animatedItems = document.querySelectorAll('.animate-up');
  
    animatedItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add('show');
      }
    });
  }
  
  // Dispara a função quando houver scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Executa a função uma vez no início para verificar a posição inicial dos elementos
  handleScrollAnimation();


    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Inicia ambas as animações simultaneamente
          typewriterAnimation(text1, typewriterText1);
          typewriterAnimation(text2, typewriterText2);
          observer.disconnect(); // Impede a animação de ocorrer mais de uma vez
        }
      });
    });

    // Observa a section "curso"
    observer.observe(document.querySelector('.cursos, .crq-sp'));




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


