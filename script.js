/* script.js - lógica do site e quiz */
const quizData = [
  {
    id:1,
    q: "Você recebe um e-mail do seu banco com link solicitando atualização de senha imediata. O remetente parece 'suporte@banco-xyz.com.br' mas o link aponta para um domínio diferente. O que fazer?",
    options: [
      {id:'a', text:"Clicar no link e atualizar a senha agora."},
      {id:'b', text:"Ligar para o número oficial do banco antes de agir. Não clicar no link."},
      {id:'c', text:"Responder o e-mail pedindo mais informações."},
      {id:'d', text:"Ignorar, pois deve ser uma verificação automática."}
    ],
    correct: 'b',
    explain: "Phishing clássico: nunca clique em links. Confirme pelo canal oficial (app, site oficial, telefone)."
  },
  {
    id:2,
    q: "Alguém liga dizendo que é suporte técnico e pede para instalar um programa de acesso remoto para 'corrigir um problema' sem que você tenha solicitado. O que é mais seguro?",
    options: [
      {id:'a', text:"Permitir o acesso remoto só por alguns minutos."},
      {id:'b', text:"Reiniciar o computador e aceitar a ajuda."},
      {id:'c', text:"Recusar e entrar em contato com a empresa pelo canal oficial."},
      {id:'d', text:"Compartilhar o código que o técnico pedir para gerar."}
    ],
    correct: 'c',
    explain: "Suporte falso costuma angariar acesso remoto para roubar dados. Contate a empresa por um canal oficial."
  },
  {
    id:3,
    q: "Ao comprar online, você encontra um anúncio com preço muito abaixo do mercado e pagamento apenas por transferência. O que fazer?",
    options: [
      {id:'a', text:"Comprar rápido antes que acabe."},
      {id:'b', text:"Verificar reputação do vendedor e preferir pagamentos com proteção (cartão, marketplace)."},
      {id:'c', text:"Pedir número de WhatsApp e negociar o preço."},
      {id:'d', text:"Pagar por PIX para garantir desconto."}
    ],
    correct: 'b',
    explain: "Preços muito baixos e pagamento em transferência direta são sinais de golpe. Prefira meios com proteção ao comprador."
  },
  {
    id:4,
    q: "Você recebe um SMS com código de autenticação (2FA) que você não solicitou. O que isso provavelmente indica?",
    options: [
      {id:'a', text:"Alguém tentando acessar uma conta sua."},
      {id:'b', text:"Serviço legítimo fazendo manutenção."},
      {id:'c', text:"Promoção de login seguro."},
      {id:'d', text:"Nada — é normal receber códigos sem pedir."}
    ],
    correct: 'a',
    explain: "Códigos não solicitados podem significar tentativa de takeover. Não compartilhe códigos e altere senhas se necessário."
  },
  {
    id:5,
    q: "Um link encurtado em redes sociais promete 'prêmios' mas pede para você fazer login com sua conta. Como proceder?",
    options: [
      {id:'a', text:"Fazer login para ganhar o prêmio."},
      {id:'b', text:"Verificar a origem e nunca usar credenciais em sites desconhecidos."},
      {id:'c', text:"Usar outra conta 'fake' para testar."},
      {id:'d', text:"Compartilhar com amigos para aumentar chances."}
    ],
    correct: 'b',
    explain: "Golpes usam logins falsos para capturar credenciais. Nunca use conta principal em sites suspeitos."
  },
  {
    id:6,
    q: "Você encontra um anexo ZIP inesperado no e-mail de um conhecido. O que fazer antes de abrir?",
    options: [
      {id:'a', text:"Abrir para ver o conteúdo rapidamente."},
      {id:'b', text:"Confirmar por outro canal com a pessoa e usar antivírus / sandbox."},
      {id:'c', text:"Baixar e passar para um amigo para revisar."},
      {id:'d', text:"Renomear o arquivo e abrir depois."}
    ],
    correct: 'b',
    explain: "Anexos podem conter malware. Confirme a origem e use ferramentas seguras antes de abrir."
  },
  {
    id:7,
    q: "Qual a prática mais segura para senhas?",
    options: [
      {id:'a', text:"Usar a mesma senha em vários sites."},
      {id:'b', text:"Anotar senhas em um arquivo de texto sem criptografia."},
      {id:'c', text:"Usar um gerenciador de senhas e senhas fortes e únicas."},
      {id:'d', text:"Usar seu aniversário porque é fácil lembrar."}
    ],
    correct: 'c',
    explain: "Gerenciadores criam e armazenam senhas seguras; são mais seguros que reaproveitar senhas."
  },
  {
    id:8,
    q: "Se você identificar um golpe que afetou muitas pessoas, qual medida você pode tomar?",
    options: [
      {id:'a', text:"Divulgar a conta do golpista nas redes sociais."},
      {id:'b', text:"Registrar ocorrência policial e avisar a plataforma/empresa afetada."},
      {id:'c', text:"Tentar recuperar dinheiro por conta própria pagando 'rastreador'."},
      {id:'d', text:"Nada — não adianta."}
    ],
    correct: 'b',
    explain: "Registrar ocorrência e avisar a plataforma ajuda na resposta e prevenção. Evite ações não oficiais que podem agravar a situação."
  },
  {
    id:9,
    q: "Se você recebe uma ligação de alguém dizendo ser do banco e pedindo sua senha, o que você faz?",
    options: [
      {id:'a', text:"Se você recebe uma ligação de alguém dizendo ser do banco e pedindo sua senha, o que você faz?"},
      {id:'b', text:"Peço para ligar depois e desligo imediatamente"},
      {id:'c', text:"Vou até a agência pessoalmente ou ligo no número oficial do banco"},
      {id:'d', text:"Nada — não adianta."}
    ],
    correct: 'c',
    explain: "Bancos nunca pedem senhas por telefone. Desligue e contate o banco por canais oficiais."
  },
  {
    id:10,
    q: "Você recebe um SMS ou WhatsApp dizendo que precisa clicar em um link para liberar um “presente de aniversário” da loja. O que você faz?",
    options: [
      {id:'a', text:"Clico no link e sigo as instruções"},
      {id:'b', text:"Desconfio e não clico em nada"},
      {id:'c', text:"Peço ajuda para alguém de confiança antes de abrir"},
      {id:'d', text:"Compartilho com amigos para ver se eles também receberam"}
    ],
    correct: 'b',
    explain: "Desconfie de mensagens suspeitas e nunca clique em links sem verificar a origem."
  },
  {
    id:11,
    q: "Recebeu no WhatsApp uma mensagem de um “filho ou neto” pedindo dinheiro urgente de um número desconhecido. Como agir?",
    options: [
      {id:'a', text:"Faço a transferência imediatamente"},
      {id:'b', text:"Ignoro e bloqueio o contato"},
      {id:'c', text:"Peço para enviar uma foto ou vídeo para confirmar a identidade"},
      {id:'d', text:"Ligo para o número antigo da pessoa ou confirmo com um familiar antes"}
    ],
    correct: 'd',
    explain: "Golpistas usam números desconhecidos. Confirme a identidade por outros meios antes de agir."
  },
  {
    id:12,
    q: "Recebeu no WhatsApp uma mensagem de um “filho ou neto” pedindo dinheiro urgente de um número desconhecido. Como agir?",
    options: [
      {id:'a', text:"Faço a transferência imediatamente"},
      {id:'b', text:"Ignoro e bloqueio o contato"},
      {id:'c', text:"Peço para enviar uma foto ou vídeo para confirmar a identidade"},
      {id:'d', text:"Ligo para o número antigo da pessoa ou confirmo com um familiar antes"}
    ],
    correct: 'd',
    explain: "Golpistas usam números desconhecidos. Confirme a identidade por outros meios antes de agir."
  },
  {
    id:13,
    q: 'Você acha que a seguinte mensagem é verdadeira ou falsa?"Parabéns! Você ganhou um prêmio. Para retirar, pague apenas a taxa de entrega de R$ 50,00."',
    options: [
      {id:'a', text:"Verdadeira"},
      {id:'b', text:"Falsa"},
      {id:'c', text:"Não sei"},
      {id:'d', text:"Preciso verificar"}
    ],
    correct: 'b',
    explain: "Golpes de prêmios falsos são comuns. Nunca pague taxas para receber supostos prêmios."
  },
  {
    id:14,
    q: "Qual destas senhas é mais segura?",
    options: [
      {id:'a', text:"123456"},
      {id:'b', text:"Data de Nascimento"},
      {id:'c', text:"Maria2024#"},
      {id:'d', text:"Nome do Cachorro"}
    ],
    correct: 'c',
    explain: "Senhas fortes combinam letras maiúsculas, minúsculas, números e símbolos."
  },
  {
    id:15,
    q: "O que você faz ao receber mensagens com links de ofertas “imperdíveis” pelo WhatsApp?",
    options: [
      {id:'a', text:"Clico imediatamente para aproveitar"},
      {id:'b', text:"Só abro se for de uma loja conhecida, mas confirmo no site oficial"},
      {id:'c', text:"Não sei"},
      {id:'d', text:"Nunca abro links enviados por mensagens"}
    ],
    correct: 'd',
    explain: "Nunca confie em links enviados por mensagens. Verifique sempre a fonte."
  }
];

function $(sel){return document.querySelector(sel)}
function createQuiz(){
  const container = $('#quiz-container');
  container.innerHTML = '';
  const state = JSON.parse(localStorage.getItem('alerta-quiz') || '{"current":0,"answers":{}}');
  const current = state.current || 0;

  function renderQuestion(i){
    const q = quizData[i];
    const card = document.createElement('div');
    card.className = 'quiz-card-inner';
    const title = document.createElement('h3');
    title.textContent = `Questão ${i+1} de ${quizData.length}`;
    const question = document.createElement('p');
    question.className = 'question';
    question.textContent = q.q;
    card.appendChild(title); card.appendChild(question);

    const opts = document.createElement('div');
    opts.className = 'options';
    q.options.forEach(opt=>{
      const label = document.createElement('label');
      label.className = 'option';
      label.tabIndex = 0;
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q'+q.id;
      input.value = opt.id;
      input.checked = (state.answers[q.id] === opt.id);
      const span = document.createElement('span');
      span.textContent = opt.text;
      label.appendChild(input); label.appendChild(span);
      label.addEventListener('click', ()=> {
        state.answers[q.id]=opt.id;
        localStorage.setItem('alerta-quiz', JSON.stringify(state));
      });
      opts.appendChild(label);
    });
    card.appendChild(opts);

    const actions = document.createElement('div');
    actions.style.marginTop='1rem';
    const prev = document.createElement('button'); prev.textContent='Anterior'; prev.className='btn ghost';
    const next = document.createElement('button'); next.textContent = (i===quizData.length-1)?'Finalizar':'Próxima'; next.className='btn';
    prev.addEventListener('click', ()=> { state.current = Math.max(0, i-1); localStorage.setItem('alerta-quiz', JSON.stringify(state)); render(); });
    next.addEventListener('click', ()=> {
      if(i===quizData.length-1){ showResults(); return; }
      state.current = Math.min(quizData.length-1, i+1);
      localStorage.setItem('alerta-quiz', JSON.stringify(state));
      render();
    });
    actions.appendChild(prev); actions.appendChild(next);
    card.appendChild(actions);

    container.appendChild(card);
  }

  function render(){
    container.innerHTML = '';
    const st = JSON.parse(localStorage.getItem('alerta-quiz') || '{"current":0,"answers":{}}');
    renderQuestion(st.current || 0);
  }

  function showResults(){
    const st = JSON.parse(localStorage.getItem('alerta-quiz') || '{"current":0,"answers":{}}');
    const answers = st.answers || {};
    let score = 0;
    const resultsCard = document.createElement('div');
    resultsCard.className = 'quiz-results';
    const h = document.createElement('h3'); h.textContent = 'Resultados';
    resultsCard.appendChild(h);

    const list = document.createElement('ol');
    quizData.forEach(q=>{
      const li = document.createElement('li');
      const your = answers[q.id];
      const ok = your === q.correct;
      if(ok) score++;
      const title = document.createElement('strong');
      title.textContent = q.q;
      li.appendChild(title);
      const p = document.createElement('p');
      p.innerHTML = `<em>Sua resposta:</em> ${your||'<span style="opacity:.6">Não respondida</span>'} — ${ok?'<span style="color:var(--accent-green)">Correta</span>':'<span style="color:#ff7b7b">Errada</span>'}`;
      const exp = document.createElement('p');
      exp.innerHTML = `<em>Explicação:</em> ${q.explain}`;
      li.appendChild(p); li.appendChild(exp);
      list.appendChild(li);
    });
    resultsCard.appendChild(list);

    const summary = document.createElement('p');
    summary.innerHTML = `<strong>Você acertou ${score} de ${quizData.length} (${Math.round((score/quizData.length)*100)}%)</strong>`;
    resultsCard.insertBefore(summary, list);

    const tips = document.createElement('div');
    tips.innerHTML = '<p>Recomendação: reveja as explicações e aplique as dicas no seu dia a dia. Salve este progresso no seu navegador para continuar depois.</p>';
    resultsCard.appendChild(tips);

    const actions = document.createElement('div');
    actions.style.marginTop='1rem';
    const retry = document.createElement('button'); retry.textContent='Refazer quiz'; retry.className='btn ghost';
    retry.addEventListener('click', ()=> { localStorage.removeItem('alerta-quiz'); createQuiz(); });
    const save = document.createElement('button'); save.textContent='Salvar resultado (local)'; save.className='btn';
    save.addEventListener('click', ()=> {
      const saved = JSON.parse(localStorage.getItem('alerta-quiz-saved')||'[]');
      saved.push({when:new Date().toISOString(),score,answers:answers});
      localStorage.setItem('alerta-quiz-saved', JSON.stringify(saved));
      alert('Resultado salvo localmente no navegador.');
    });
    actions.appendChild(retry); actions.appendChild(save);
    resultsCard.appendChild(actions);

    const container = $('#quiz-container');
    container.innerHTML = '';
    container.appendChild(resultsCard);
  }

  render();
}

document.addEventListener('DOMContentLoaded', ()=> {
  // menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  menuBtn.addEventListener('click', ()=>{
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // init quiz
  createQuiz();

  // contact form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    // Simulação: gravar no localStorage como "envio"
    const subs = JSON.parse(localStorage.getItem('alerta-contacts')||'[]');
    subs.push({name:data.get('name'),email:data.get('email'),message:data.get('message'),when:new Date().toISOString()});
    localStorage.setItem('alerta-contacts', JSON.stringify(subs));
    alert('✅ Mensagem registrada localmente. Em ambiente real, aqui enviaríamos para o servidor.');
    form.reset();
  });

  // clear storage button
  $('#clearStorage').addEventListener('click', ()=> {
    if(confirm('Limpar progresso e dados salvos no navegador?')) {
      localStorage.removeItem('alerta-quiz');
      localStorage.removeItem('alerta-quiz-saved');
      localStorage.removeItem('alerta-contacts');
      alert('Dados removidos.');
      createQuiz();
    }
  });
});
