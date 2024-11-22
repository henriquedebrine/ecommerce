
import React from 'react';
import { LinkButton } from '../components/LinkButton'; // Importando o LinkButton

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <p className="mt-2 text-sm text-gray-500">
          Desculpe, mas a página que você está procurando não existe ou foi movida.
        </p>
        <LinkButton to="/" text="Voltar para a página inicial" />
      </div>
    </div>
  );
};

export default NotFoundPage;