import React from 'react'
import Card from './Card'
import dataArr from './assets/data.json'
// import mark from './assets/img/mark.png'
// import image2 from './assets/img/mark.png'
// import image3 from './assets/img/mark.png'
/*
const imagesArr = dataArr.data.map((cardObj) => {
  cardObj.picture = "./assets/img/" + cardObj.picture
  return cardObj.picture
})
console.log(imagesArr)
*/

function Cards() {
  
  return (
    <div className="container d-flex h-100 align-items-center">
      <div className="row">
        {
          dataArr.data.map((cardObj, index) => (
            <div className="col-md-4" key={index}>
          <Card 
            name={cardObj.name}
            description={cardObj.description}
            image={"./assets/img/mark.png"}
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

