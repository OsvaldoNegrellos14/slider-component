import React, { useEffect, useRef, useState } from 'react'
import ReactSwipe from 'react-swipe';
import useWindowSize from '../helpers/useWindowSize';

const MOCKS = [
  {
    title: 'Card title one',
    description: 'Some quick example text to build on the card title and make up the bulk of the content.'
  },
  {
    title: 'Card title two',
    description: 'Some quick example text to build on the card title and make up the bulk of the content.'
  },
  {
    title: 'Card title three',
    description: 'Some quick example text to build on the card title and make up the bulk of the content.'
  },
  {
    title: 'Card title three',
    description: 'Some quick example text to build on the card title and make up the bulk of the content.'
  }
]

const ReactSwipeComponent = ({ data }) => {
  const [products, setProducts] = useState([])
  const size = useWindowSize()
  const [currentElement, setCurrentElement] = useState(0)

  useEffect(() => {
    setProducts(MOCKS)
  }, [])

  let swipe

  // const startSlide = 0;
  const swipeOptions = {
    // startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
    startSlide: currentElement < products.length && currentElement >= 0 ? currentElement : 0,
    disableScroll: false,
    continuous: false,
    widthOfSiblingSlidePreview: 50,
    callback: () => {
      console.log("slide changed");
    },
    transitionEnd: () => {
      console.log(swipe.getPos())
      setCurrentElement(swipe.getPos())
      console.log("ended transition");
    }
  };

  const next = () => {
    swipe.next();
    // console.log(swipe.getPos())
  }

  const prev = () => {
    swipe.prev();
    // console.log(swipe.getPos())
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ReactSwipe.js Playground</h1>

      {
        size.width < 768
          ? (
            <>
              <ReactSwipe
                ref={reactSwipe => (swipe = reactSwipe)}
                swipeOptions={swipeOptions}
              >
                {
                  products && products.map((product, index) => {
                    return (
                      <div key={index} className={``}>
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
              </ReactSwipe>
              <br />
              <div>
                <ul className='d-flex' style={{listStyleType: 'none'}}>
                  {
                    products && products.map((product, index) => {
                      return (
                        <li key={index}>
                          {currentElement === index ? `${'active'}` : index}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <br />
              <div style={{ textAlign: "center" }}>
                <button type="button" onClick={prev}>
                  Prev
                </button>
                <button type="button" onClick={next}>
                  Next
                </button>
              </div>
            </>

          )
          : (
            <div className='d-flex'>
              {
                products && products.map((product, index) => {
                  return (
                    <div key={index} className={`cont`}>
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
          )
      }

    </div>
  )
}

export default ReactSwipeComponent