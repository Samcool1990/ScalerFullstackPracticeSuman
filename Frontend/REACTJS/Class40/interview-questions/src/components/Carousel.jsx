import React, { useEffect, useState } from 'react';

const items = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 1',
      description: 'Description of item 1',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 2',
      description: 'Description of item 2',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 3',
      description: 'Description of item 3',
    },
  ];


  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    }

    const gotoNext = () => {
        setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    }

    useEffect(() => {
        setInterval(() => {
            gotoNext()
        },5000);
    })

    return (
        <div >
            <button onClick={gotoPrevious}>Previous</button>
            <button onClick={gotoNext}>Next</button>
            <div >
                <img src={items[currentIndex].imageUrl} alt={items[currentIndex].title} />
                <h2>{items[currentIndex].title}</h2>
                <p>{items[currentIndex].description}</p>
            </div>            
        </div>
    )
  }

  export default Carousel;


