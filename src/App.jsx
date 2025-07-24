
import './App.css'
import Footer from './componentes/footer/Footer'
import Navbar from './componentes/navbar/Navbar'
import Nosotros from './componentes/nosotros/Nosotros'
import Productos from './componentes/productos/Productos'
import Referencias from './componentes/referencias/Referencias'
import SeccionBeneficios from './componentes/seccionBeneficios/SeccionBeneficios'
import SeccionHero from './componentes/seccionHero/SeccionHero'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <SeccionHero />
      <SeccionBeneficios />
      <Productos />
      <Referencias />
      <Nosotros />
      <Footer />
    </>
  )
}

export default App
