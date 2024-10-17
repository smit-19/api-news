import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Example from './Components/Example';
import Validation from './Components/Validation';

function App() {
    return (
        <div>
            <Example />
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Example/>}/>
                <Route path='/valid' element={<Validation/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
