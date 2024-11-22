import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();  

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: 'Tênis de Corrida Nike Air Zoom',
          description: 'Leve, confortável e com tecnologia de amortecimento para melhor performance.',
          price: 499.90,
          image: '/img/tenis_nike.jpg',
        },
        {
          id: 2,
          name: 'Raquete de Tênis Wilson Pro Staff',
          description: 'Raquete de alta performance, ideal para jogadores avançados e profissionais.',
          price: 899.00,
          image: '/img/raquete_wilson.jpg',
        },
        {
          id: 3,
          name: 'Bola de Futebol Adidas UEFA Champions League',
          description: 'Bola oficial da UEFA Champions League, durável e com excelente precisão.',
          price: 199.99,
          image: '/img/bola_adidas.jpg',
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <Container className="py-8 bg-white">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-3xl font-semibold text-black mb-12">
        Todos os Produtos
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="bg-black text-white shadow-lg rounded-lg hover:shadow-2xl transition transform hover:scale-105">
              <CardContent>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-600"
                />
                <Typography variant="h5" className="font-semibold text-white">{product.name}</Typography>
                <Typography variant="body2" className="text-gray-400 mt-2">{product.description}</Typography>
                <Typography variant="h6" className="text-blue-400 mt-2">R$ {product.price.toFixed(2)}</Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  className="mt-4"
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
