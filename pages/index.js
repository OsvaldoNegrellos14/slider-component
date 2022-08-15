import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import LibraryCarousel from "../components/LibraryCarousel"
import ReactSwipeComponent from "../components/ReactSwipeComponent"
import Slider from "../components/Slider"
import useWindowSize from "../helpers/useWindowSize"
// import { Carousel } from '@trendyol-js/react-carousel';

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
  }
]

export default function Home() {
  // const [products, setProducts] = useState([])
  // const size = useWindowSize()

  // useEffect(() => {
  //   setProducts(MOCKS)
  // }, [])


  return (
    <div className="App">

      {/* <Carousel /> */}
      <ReactSwipeComponent data={MOCKS} />
    </div>
  );
}
