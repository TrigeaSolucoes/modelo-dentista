(() => {
  const select = document.querySelector("#tratamento");
  const link = document.querySelector("#agendar-tratamento");
  const tabs = [...document.querySelectorAll("[data-tratamento]")];
  const nome = document.querySelector("#tratamento-nome");
  const oQue = document.querySelector("#tratamento-o-que");
  const tempo = document.querySelector("#tratamento-tempo");
  const sessoes = document.querySelector("#tratamento-sessoes");

  const atualizar = (id) => {
    const tratamento = tabs.find((item) => item.dataset.tratamento === id);
    if (!tratamento) return;
    nome.textContent = tratamento.dataset.nome;
    oQue.textContent = tratamento.dataset.oQue;
    tempo.textContent = tratamento.dataset.tempo;
    sessoes.textContent = tratamento.dataset.sessoes;
    tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tratamento)));
    select.value = id;
    const mensagem = `Olá, gostaria de agendar uma avaliação. Quero conversar sobre: ${tratamento.dataset.nome}.`;
    link.href = `${link.dataset.base.split("?")[0]}?text=${encodeURIComponent(mensagem)}`;
  };

  select.addEventListener("change", () => atualizar(select.value));
  tabs.forEach((tab) => tab.addEventListener("click", () => atualizar(tab.dataset.tratamento)));
  atualizar(select.value);
})();
