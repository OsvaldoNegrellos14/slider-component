import React, { useEffect, useState } from 'react'
import useWindowSize from '../helpers/useWindowSize'

const MOCKS = [
  {
    title: 'Card title one',
    description: 'Some quick example text to build on the card title and make up the bulk of the content. wadawdwa dwad'
  },
  {
    title: 'Card title two',
    description: 'Some quick example text to build on the card title and make up the bulk of the content.aw'
  },
  {
    title: 'Card title three',
    description: 'Some quick example text to build on the card title and make up the bulk of the content. awd wadwadwadwad awdadwa'
  }
]

const Carousel = () => {
  const [products, setProducts] = useState([])
  const size = useWindowSize()

  useEffect(() => {
    setProducts(MOCKS)
  }, [])
  return (
    <div className="container">
      <div id="carouselExampleDark" className={`carousel carousel-dark ${size.width < 768 ? 'slide' : ''}`} data-ride="carousel" data-bs-interval="false" data-bs-touch="true" style={{ position: 'relative' }}>
        {
          size.width < 768 && (
            <div className="carousel-indicators" style={{ position: 'absolute', bottom: '-50px' }}>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          )
        }

        <div className="carousel-inner">
          {
            products && products.map((product, index) => {
              return (
                <div className={`carousel-item ${index === 1 && 'active'}`} key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        {
          size.width < 768 && (
            <>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{ position: 'absolute', left: '-50px' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{ position: 'absolute', right: '-50px' }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Carousel