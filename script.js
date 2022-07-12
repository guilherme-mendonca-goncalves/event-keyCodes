const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div>
      <div class="key">
        <div>
          ${event.key === ' ' ? 'Espaço' : event.key}
          <small class="title">event.key</small>
        </div>
        <div class="key">
          <small>O valor da tecla pressionada.</small>
        </div>
      </div>
      <div class="key">
        <div>
          ${event.keyCode}
          <small class="title">event.keyCode</small>
        </div>
        <div class="key">
          <small>Código númerico correspondente do caractere.</small>
        </div>
      </div>
      <div class="key">
        <div>
          ${event.code}
          <small class="title">event.code</small>
        </div>
        <div class="key">
          <small>A chave física no teclado.</small>
        </div>
      </div>
    </div>
  `
})
