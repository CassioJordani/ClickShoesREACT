import React from 'react';
import '../Contact.css'; // Importando do arquivo CSS

const Contatos = () => {
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <main className="contact">
      <div className="pg-header">
        <div className="container">
          <h1>Contatos</h1>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-4">
            <h2>Envie-nos uma mensagem</h2>
            <p>Preencha o formulário abaixo para entrar em contato conosco.</p>
          </div>
          <div className="col-lg-8">
            {/* Formulário de Contato */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Assunto:</label>
              <input type="text" id="subject" name="subject" required />

              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contatos;
