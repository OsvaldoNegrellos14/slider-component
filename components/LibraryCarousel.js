import React, { useEffect, useState, ReactDOM } from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
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

const LibraryCarousel = () => {
  // const [products, setProducts] = useState([])
  // const size = useWindowSize()

  // useEffect(() => {
  //   setProducts(MOCKS)
  // }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Carousel show={1.25} slide={1} swiping={true}>
        <div style={{ height: 150, width: 300, background: 'red' }} />
        <div style={{ height: 150, width: 300, background: 'blue' }} />
        <div style={{ height: 150, width: 300, background: 'green' }} />
        <div style={{ height: 150, width: 300, background: 'yellow' }} />
        <div style={{ height: 150, width: 300, background: 'orange' }} />
        <div style={{ height: 150, width: 300, background: 'cian' }} />
        <div style={{ height: 150, width: 300, background: 'purple' }} />
        <div style={{ height: 150, width: 300, background: 'brown' }} />
        <div style={{ height: 150, width: 300, background: 'black' }} />
        <div style={{ height: 150, width: 300, background: 'orange' }} />
      </Carousel>
    </div>
  );
}

export default LibraryCarousel