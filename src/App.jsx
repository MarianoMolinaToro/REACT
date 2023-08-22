import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { Button, Card as BootstrapCard } from 'react-bootstrap';

function App() {
  const dogs = [
    {
      image: 'https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_1280.jpg',
      name: 'Firulais',
      description: 'Cariñoso y tierno.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', 
      name: 'Cachupin',
      description: 'Jugueton y muy obediente.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg', 
      name: 'Pelusa',
      description: 'Una fiel compañera.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_1280.jpg', 
      name: 'Manchas',
      description: 'Un amigo inseparable.',
    },
  ];

  const buttonColors = ['success', 'primary', 'danger', 'warning'];

  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {dogs.map((dog, index) => (
          <BootstrapCard key={index} style={{ width: '18rem' }}>
            <BootstrapCard.Img variant="top" src={dog.image} alt={dog.name} />
            <BootstrapCard.Body>
              <BootstrapCard.Title>{dog.name}</BootstrapCard.Title>
              <BootstrapCard.Text>{dog.description}</BootstrapCard.Text>
              <Button variant={buttonColors[index]}>Más información</Button>
            </BootstrapCard.Body>
          </BootstrapCard>
        ))}
      </div>
      <Footer />

    </div>
  );
}

export default App;
