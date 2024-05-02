import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-n0-repeat bg-center mb-10">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
    
  )
}

export default App