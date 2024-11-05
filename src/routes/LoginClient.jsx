// src/components/LoginCliente.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function LoginCliente() {
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação simples para CPF ou telefone
    if (!cpf && !telefone) {
      setError("Por favor, preencha o CPF ou o Número de Telefone.");
      return;
    }

    setError(null);
    console.log("Login bem-sucedido!", { cpf, telefone });
    // Aqui, você pode adicionar a lógica de autenticação
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Login do Cliente</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="cpf" className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="telefone" className="mb-3">
              <Form.Label>Número de Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu número de telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Entrar
              </Button>
              <Button variant="secondary" onClick={() => console.log('Criar Conta')}>
                Criar Conta
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginCliente;
