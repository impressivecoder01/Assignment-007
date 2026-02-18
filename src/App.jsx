
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className='bg-gray-100 w-11/12 mx-auto py-10'>
        <section className='hero-section px-1'>
          <Hero></Hero>

        </section>
      </main>
    </>
  )
}

export default App
