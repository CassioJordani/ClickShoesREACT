import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data.js';
import '../Cart.css'; // Importando a folha de estilo do carrinho

// Usa o useState para poder definir o estado dos itens do carrinho, que armazena os itens no carrinho de compras. setCartItems é a função que vai ser usada para atualizar esse estado dos cardItems. (Hook)
const Products = () => {
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // removeFromCart: Remove um produto do carrinho com base no ID do produto.
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // increaseQuantity: Aumenta a quantidade de um item no carrinho.
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // decreaseQuantity: Diminui a quantidade de um item mas mantendo no mínimo 1 unidade.
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  // calcular o total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Produtos</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Produtos</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {/*renderizar cada produto em um card como Id, imagem, nome, etc. (conteudo do container) */}
          {PRODUCTS.map((product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Preço: <strong className="price"> {product.price}</strong>
                    </span>
                      <div>
                        {/*link para a página dos detalhes do produto. */}
                        <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                          DETALHES
                        </Link>
                        {/*botão e efeitos. */}
                        <button
                          className="btn btn-primary btn-sm ml-2"
                          onClick={() => addToCart(product)}
                        >
                          ADICIONAR AO CARRINHO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carrinho de Compras LÓGICA e BOTÕES */}
      <div className="cart">
        <h2>Carrinho de Compras</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>Preço: {item.price}</p>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <p>Subtotal: {item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotal()}</p>
      </div>
    </main>
  );
};

export default Products;
