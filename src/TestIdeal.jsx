import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer greetings="¡Bienvenidos a la tienda!" />
        </>
    );
};

export default App;
