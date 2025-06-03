import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import art from './assets/art.png'
import avatar from './assets/perfil.png'

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <>
      <main>
      <article>
        <figure id='fig-art'>
          <img src={art} alt="" />
        </figure>
        <div>
          <button onClick={() =>{setDark(prev => !prev)}
      }>Learning</button>
          <p className='text-secondary'>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p className='text-thirdy'>This is a short preview of a blog post to showcase how this component looks.</p>
        </div>
        <figure id='blog-comment'>
          <img src={avatar} alt="" />
          <figcaption>Tom Thomsom</figcaption>
        </figure>
      </article>
      </main>
    </>
  )
}

export default App
