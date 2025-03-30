import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { getAPI } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        const url = category 
            ? `https://dummyjson.com/products/category/${category}`  
            : "https://dummyjson.com/products";

        getAPI(url)
            .then(response => {
                const productos = category ? response.products : response.products || response;
                setTodosLosProductos(productos);
                setMisProductos(productos);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [category]);

    return (
        <>          
            <div className='container-cards'>
                {loading ? <Loader /> : misProductos.map(el => (
                    <Item key={el.id} id={el.id} nombre={el.title} precio={el.price} imagen={el.thumbnail} />
                ))}
            </div>
        </>
    );
}

export default ItemListContainer;