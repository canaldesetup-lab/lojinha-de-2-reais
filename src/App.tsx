
import { useState } from 'react'
import './App.css'

const produtos = [
  {
    categoria: 'IMPULSOS',
    titulo: 'Fornecedor de impulsos',
    descricao: 'Solicite seu fornecedor preenchendo o ticket.',
    preco: 'R$ 1,99',
  },
  {
    categoria: 'CONTAS NITRADAS',
    titulo: 'Fornecedor de contas nitradas',
    descricao: 'Solicite seu fornecedor preenchendo o ticket.',
    preco: 'R$ 2,20',
  },
  {
    categoria: 'MEMBROS',
    titulo: 'Fornecedor de membros',
    descricao: 'Solicite seu fornecedor preenchendo o ticket.',
    preco: 'R$ 1,00',
  },
]

function App() {
  const [categoria, setCategoria] = useState('TODOS')

  const exibidos = categoria === 'TODOS'
    ? produtos
    : produtos.filter(p => p.categoria === categoria)

  return (
    <div className="loja">
      <header className="topo">
        <h1>LOJINHA DE 2 REAIS</h1>
      </header>

      <main>
        <section className="produtos">
          <h2>NOSSOS PRODUTOS</h2>
          <p>Escolha uma categoria e encontre o que procura.</p>

          <div className="categorias">
            {['TODOS', 'IMPULSOS', 'CONTAS NITRADAS', 'MEMBROS'].map(item => (
              <button
                key={item}
                className={categoria === item ? 'ativo' : ''}
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="lista">
            {exibidos.map(produto => (
              <article className="produto" key={produto.categoria}>
                <span className="categoria">{produto.categoria}</span>
                <h3>{produto.titulo}</h3>
                <p>{produto.descricao}</p>
                <strong>{produto.preco}</strong>
                <button
                  className="comprar"
                  onClick={() => window.open('https://discord.gg/Hrn8CfRwa', '_blank')}
                >
                  COMPRE FORN.
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>LOJINHA DE 2 REAIS</footer>
    </div>
  )
}

export default App
