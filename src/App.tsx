import './App.css'
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/works/Projects';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Projects/>
            <Skills/>
        </div>
    )
}

export default App