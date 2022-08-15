import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({width: undefined, height: undefined})
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      // cuando se dispara el evento, cambia los valores
      window.addEventListener('resize', handleResize)

      // darle el valor inicial sin que se haya lanzado el evento
      handleResize()

      // remueve el evento en la limpieza
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return windowSize
}

export default useWindowSize