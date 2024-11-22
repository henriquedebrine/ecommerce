import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg mb-12 shadow-xl">
        <img
          src="https://img.freepik.com/fotos-gratis/ferramentas-esportivas_53876-138077.jpg"
          alt="Imagem da loja"
          className="w-40 h-40 object-cover rounded-full mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:ml-8">
          <h1 className="text-4xl font-bold leading-tight">
            Bem-vindo à SportsShop!
          </h1>
          <p className="text-lg mt-4 max-w-lg mx-auto md:mx-0">
            Encontre os melhores produtos esportivos para suas atividades
            físicas, com qualidade e entrega rápida.
          </p>
        </div>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-blue-600">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="/img/bola_adidas.jpg"
              alt="Bola de Futebol"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600">
              Bola de Futebol Oficial
            </h3>
            <p className="text-gray-400 mt-2">
              Perfeita para partidas em campo ou treino, feita com material
              resistente.
            </p>
            <Link
              to="/products"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Ver Produto
            </Link>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="/img/raquete_wilson.jpg"
              alt="Raquete de Tênis"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600">
              Raquete de Tênis Profissional
            </h3>
            <p className="text-gray-400 mt-2">
              Leve e resistente, ideal para jogadores iniciantes e avançados.
            </p>
            <Link
              to="/products"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Ver Produto
            </Link>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="/img/whey_protein.jpg"
              alt="Whey Protein"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600">
              Whey Protein Isolado
            </h3>
            <p className="text-gray-400 mt-2">
              Suplemento de alta qualidade para ganho de massa muscular.
            </p>
            <Link
              to="/products"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Ver Produto
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-center bg-black text-white py-6 rounded-lg mt-12 shadow-lg">
        <p className="text-sm">
          &copy; 2024 SportsShop. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
