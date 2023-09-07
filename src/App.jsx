import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Tags from './components/Tags';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  // datos perros
  const dogData = [
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_1280.jpg',
      name: 'Firulais',
      description: 'Cariñoso y tierno.',
      tagText: 'Amigable',
      tagColor: 'success',
      buttonText: 'Adoptar a Firulais',
      
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      name: "Cachupin",
      description: "Travieso",
      tagText: 'Juguetón',
      tagColor: 'info',
      buttonText: 'Adoptar a Cachupin',
      
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg',
      name: 'Pelusa',
      description: 'Una fiel compañera.',
      tagText: 'Leal',
      tagColor: 'warning',
      buttonText: 'Adoptar a Pelusa',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_1280.jpg',
      name: 'Manchas',
      description: 'Un amigo inseparable.',
      tagText: 'Inseparable',
      tagColor: 'danger', 
      buttonText: 'Adoptar a Manchas',
    },
    
  ];

  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {dogData.map((dog, index) => (
          <Card
            key={index}
            index={index}
            imageSrc={dog.imageSrc}
            name={dog.name}
            description={dog.description}
            buttonText={dog.buttonText} 
          >
            <Card.Body>
              <Card.Text>
                <Tags text={dog.tagText} backgroundColor={dog.tagColor} />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        
      </div>
       <Footer></Footer>
    </div>
  );
}

export default App;
