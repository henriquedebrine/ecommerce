import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-blue-600 to-black">
      <Container maxWidth="xs" className="bg-black text-white p-8 rounded-lg shadow-lg">
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-white mb-6">
          Crie sua Conta
        </Typography>

        <form onSubmit={handleSignup} className="space-y-4">
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            requiblue
            className="bg-black text-white border-2 border-gray-600 focus:ring-2 focus:ring-blue-500 rounded-md"
            InputLabelProps={{
              style: { color: '#FF0000' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />

          {/* Campo de email */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            requiblue
            className="bg-black text-white border-2 border-gray-600 focus:ring-2 focus:ring-blue-500 rounded-md"
            InputLabelProps={{
              style: { color: '#FF0000' }, // Cor do label (vermelho)
            }}
            InputProps={{
              style: { color: '#fff' }, // Cor do texto no campo
            }}
          />

          {/* Campo de senha */}
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            requiblue
            className="bg-black text-white border-2 border-gray-600 focus:ring-2 focus:ring-blue-500 rounded-md"
            InputLabelProps={{
              style: { color: '#FF0000' }, // Cor do label (vermelho)
            }}
            InputProps={{
              style: { color: '#fff' }, // Cor do texto no campo
            }}
          />

          {/* Botão de Registrar */}
          <Button
            type="submit"
            variant="contained"
            color="error"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
          >
            Registrar
          </Button>

          {/* Link para a página de Login */}
          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-400">
              Já tem uma conta?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Faça login
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
