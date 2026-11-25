
import { useState } from 'react'
import './App.css'

function App() {
  const [pixVisivel, setPixVisivel] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const chavePix = 'COLOQUE_SUA_CHAVE_PIX_AQUI'

  async function copiarPix() {
    try {
      await navigator.clipboard.writeText(chavePix)
      setMensagem('Chave PIX copiada!')
    } catch {
      setMensagem('Não foi possível copiar. Selecione a chave.')
    }
  }

  return (
    <div className="loja">
      <header className="topo">
        <h1> DARKIZINHO </h1>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#tickets">Tickets</a>
        </nav>
      </header>

      <main>
        <section className="banner" id="inicio">
          <span>🔥 LOJINHA OFICIAL</span>
          <h2>Bem-vindo à Lojinha de 2 Reais!</h2>
          <p>Escolha seu produto e confira as informações de pagamento.</p>
          <a className="botao" href="#produtos">Ver produtos</a>
        </section>

        <section id="produtos">
          <h2>Nossos produtos</h2>
          <div className="produtos">
            <article className="produto">
              <h3>Produto de R$ 2</h3>
              <p>Produto da lojinha</p>
              <strong>R$ 2,00</strong>
              <button onClick={() => setPixVisivel(true)}>
                Comprar
              </button>
            </article>

            <article className="produto">
              <h3>Impulsos</h3>
              <p>Confira nossos impulsos.</p>
              <a className="botao" href="https://discord.gg/Hrn8CfRwa">
                Ver impulsos
              </a>
            </article>
          </div>
        </section>

        {pixVisivel && (
          <section className="pagamento">
            <h2>Pagamento via PIX</h2>
            <p>Confira a chave PIX abaixo:</p>
            <p className="chave">{chavePix}</p>
            <button onClick={copiarPix}>Copiar chave PIX</button>
            <button onClick={() => setPixVisivel(false)}>Fechar</button>
            <p>{mensagem}</p>
            <small>
              O pagamento ainda precisa ser confirmado antes da entrega.
            </small>
          </section>
        )}

        <section id="tickets">
          <h2>Precisa de ajuda?</h2>
          <p>Entre em contato pelo nosso Discord.</p>
          <a className="botao" href="https://discord.gg/Hrn8CfRwa">
            Abrir atendimento
          </a>
        </section>
      </main>

      <footer>
        © 2026 Darkizinho - Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App
