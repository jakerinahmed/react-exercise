import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Artists } from './components'
import { Header } from './Layout'
import { Album, Song, NotFound } from './pages'

const App = () => {

  // function Timer() {
  //   const [count, setCount] = useState(0);

  //   const [bgColor, setBgColor] = useState('cyan')

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   });

  //   if (count % 5 === 0) {
  //     return count
  //   }

  //   // return <h1>I've rendered {count} times!</h1>;
  // }

  return (
    <div>
      {/* <Timer/> */}
      <Header />
      <Routes>
        <Route path='/' element={<Artists />} />
        <Route path='/tracks' element={<Song />} />
        <Route path='/albums' element={<Album />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
