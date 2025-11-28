import './App.css'
import { Particle } from './components/particle/Particle';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Background } from './layout/sections/background/Background';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/works/Projects';

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Background/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App