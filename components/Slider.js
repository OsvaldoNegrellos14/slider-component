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

const Slider = () => {
  const [products, setProducts] = useState([])
  const size = useWindowSize()

  useEffect(() => {
    setProducts(MOCKS)
  }, [])
  return (
    <div className="container">
      <div id="carouselExampleDark">

        <div className='' style={
          size.width < 768
            ? (
              { whiteSpace: 'nowrap', overflowX: 'auto', display: 'flex' }
            )
            : (
              { display: 'flex'}
            )
        }>
          {/* <div className="" style={{whiteSpace: 'nowrap', overflowX: 'auto', display: '-webkit-box'}}> */}
          {
            products && products.map((product, index) => {
              return (
                <div key={index} className={`${size.width >= 768 ? 'cont' : 'w-75'}`}>
                  <div className={`card`}>
                    <div className="card-body" style={{ whiteSpace: 'normal' }}>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Slider