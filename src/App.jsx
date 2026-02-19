
import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import AllCards from './components/cards/AllCards'

function App() {
  const loadData = () => fetch('/json/data.json').then(res => res.json())
  const loadDataPromise = loadData()
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className='bg-gray-100 w-11/12 mx-auto py-10'>
        <section className='hero-section px-1'>
          <Hero></Hero>
        </section>
        <section>
          <Suspense fallback={"Loading..."}>
            <AllCards promise ={loadDataPromise}>

            </AllCards>
          </Suspense>
        </section>
        
      </main>
      <footer className='w-11/12 mx-auto'>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
