import React from 'react'
import Card from './Card'
import dataArr from '../assets/data.json'
import im1 from '../assets/img/kanye.png';
import im2 from '../assets/img/mark.png';
import im3 from '../assets/img/cristina.png';
import im4 from '../assets/img/malala.png';
import im5 from '../assets/img/elon.png';
import im6 from '../assets/img/greta.png';

function Cards() {
  const images = [im1, im2, im3, im4, im5, im6];
  
  return (
    
    <div className="container d-flex h-100 align-items-center">
      <div className="row">
        {
          dataArr.data.map((cardObj, index) => (
            <div className="col-md-4" key={index}>
          <Card 
            name={cardObj.name}
            description={cardObj.description}
            cImage={images[index]}
            lastUpdated={cardObj.lastUpdated}
            category={cardObj.category}
            positives={cardObj.votes.positive}
            negatives={cardObj.votes.negative}
          />
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards

