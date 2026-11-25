
import { useState } from "react";
import "./App.css";

const pix = "96aad4f1-6e58-46fb-80f1-c3ba36e3a8e1";

const products = [
  {
    category: "IMPULSOS",
    name: "Fornecedor de impulsos",
    description: "Solicite seu fornecedor preenchendo o ticket.",
    price: "R$ 1,99",
    discord: "https://discord.gg/Matf8HRCy",
  },
  {
    category: "CONTAS NITRADAS",
    name: "Fornecedor de contas nitradas",
    description: "Solicite seu fornecedor preenchendo o ticket.",
    price: "R$ 2,20",
    discord: "https://discord.gg/Matf8HRCy",
  },
  {
    category: "MEMBROS",
    name: "Fornecedor de membros",
    description: "Solicite seu fornecedor preenchendo o ticket.",
    price: "R$ 1,00",
    discord: "https://discord.gg/Hrn8CfRwa",
  },
];

export default function App() {
  const [category, setCategory] = useState("TODOS");
  const [page, setPage] = useState("Início");
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[number] | null>(null);

  const categories = ["TODOS", "IMPULSOS", "CONTAS NITRADAS", "MEMBROS"];

  const filteredProducts =
    category === "TODOS"
      ? products
      : products.filter((product) => product.category === category);

  async function copyText(text: string, success: string) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage(success);
    } catch {
      setMessage("Não foi possível copiar. Copie manualmente.");
    }
  }

  function buyProduct(product: (typeof products)[number]) {
    setSelectedProduct(product);
    setMessage("");
    setPage("Pagamento");
  }

  return (
    <div className="app">
      <header className="header">
        <h2>LOJINHA DE 2 REAIS</h2>
        <nav>
          {["Início", "Ticket", "Histórico"].map((item) => (
            <button key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {page === "Início" && (
          <>
            <section className="banner">
              <h1>SEJA BEM-VINDO À LOJINHA!</h1>
              <p>Encontre o que procura com facilidade.</p>
            </section>

            <section className="products">
              <h2>NOSSOS PRODUTOS</h2>
              <p>Escolha uma categoria e encontre o que procura.</p>
              <div className="categories">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={category === item ? "active" : ""}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.category}>
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                    <button onClick={() => buyProduct(product)}>
                      COMPRAR
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="pix-section">
              <h2>Pagamento via PIX</h2>
              <p>Chave PIX:</p>
              <div className="pix-key">{pix}</div>
              <button onClick={() => copyText(pix, "Chave PIX copiada!")}>
                COPIAR CHAVE PIX
              </button>
              <p>{message}</p>
            </section>
          </>
        )}

        {page === "Pagamento" && selectedProduct && (
          <section className="content-section">
            <h1>FINALIZAR COMPRA</h1>
            <h2>{selectedProduct.name}</h2>
            <h2>{selectedProduct.price}</h2>
            <p>Faça o pagamento utilizando a chave PIX abaixo:</p>
            <div className="pix-key">{pix}</div>
            <button onClick={() => copyText(pix, "Chave PIX copiada!")}>
              COPIAR CHAVE PIX
            </button>
            <p>{message}</p>
            <p>Após o pagamento, aguarde a confirmação do sistema.</p>
            <button onClick={() => setPage("Prévia final")}>
              VER PRÉVIA DA TELA FINAL
            </button>
            <p><small>Esta demonstração não confirma pagamentos.</small></p>
            <button onClick={() => setPage("Início")}>VOLTAR À LOJA</button>
          </section>
        )}

        {page === "Prévia final" && selectedProduct && (
          <section className="content-section">
            <h1>COMPRA FINALIZADA</h1>
            <h2>PAGAMENTO APROVADO!</h2>
            <p>Esta é uma demonstração da tela final.</p>
            <h3>{selectedProduct.name}</h3>
            <h2>{selectedProduct.price}</h2>
            <h2>ACESSE SEU SERVIDOR!</h2>
            <p>Seu convite está disponível abaixo:</p>
            <div className="pix-key">{selectedProduct.discord}</div>
            <button
              onClick={() => copyText(selectedProduct.discord, "Convite copiado!")}
            >
              COPIAR CONVITE
            </button>
            <button
              onClick={() => window.open(selectedProduct.discord, "_blank")}
            >
              ENTRAR NO SERVIDOR
            </button>
            <p>{message}</p>
            <p>Obrigado pela compra!</p>
            <button onClick={() => setPage("Início")}>VOLTAR À LOJA</button>
            <p><small>PRÉVIA: o pagamento ainda não foi verificado.</small></p>
          </section>
        )}

        {page === "Ticket" && (
          <section className="content-section">
            <h1>ABRIR TICKET</h1>
            <p>Informe o produto que deseja solicitar.</p>
            <select value={ticket} onChange={(e) => setTicket(e.target.value)}>
              <option value="">Escolha um produto</option>
              {products.map((product) => (
                <option key={product.category} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            <p>{ticket ? `Produto escolhido: ${ticket}` : ""}</p>
            <p>Para continuar, entre em contato pelo nosso suporte.</p>
          </section>
        )}

        {page === "Histórico" && (
          <section className="content-section">
            <h1>HISTÓRICO DE COMPRAS</h1>
            <p>O histórico precisa ser conectado a um servidor seguro.</p>
          </section>
        )}
      </main>

      <footer>
        © 2026 LOJINHA DE 2 REAIS — TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
}


