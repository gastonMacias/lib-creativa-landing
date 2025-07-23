
import './App.css'
import Footer from './componentes/footer/Footer'
import Navbar from './componentes/navbar/Navbar'
import Productos from './componentes/productos/Productos'
import SeccionBeneficios from './componentes/seccionBeneficios/SeccionBeneficios'
import SeccionHero from './componentes/seccionHero/SeccionHero'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <SeccionHero />
      <SeccionBeneficios />
      <Productos />
      <Footer />
    </>
  )
}

export default App
