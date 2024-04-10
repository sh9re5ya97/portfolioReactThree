import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-n0-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>

    // <main className='bg-slate-300/20'>
    //     <Router>
    //         <Navbar />
    //         <Routes>
    //             <Route path='/' element={<Home />} />
    //             <Route path='/about' element={<About />} />
    //             <Route path='/projects' element={<Projects />} />
    //             <Route path='/contact' element={<Contact />} />
    //         </Routes>
    //     </Router>
        
    // </main>
    
  )
}

export default App