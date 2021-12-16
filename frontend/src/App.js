import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const url = 'http://localhost:3000/solution2';
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            setList(res.data);
        });
    }, []);

    return (
        <div className='App'>
            <div className='container'>
                <h1>Solution</h1>
            </div>
            <div classNmae='data-container'>
                <ul>
                    {list.map((data) => (
                        <li key={data.id}>{data.id} {data.name}</li>
                    ))}
                </ul>
            </div>
            <footer>
                <div className='footer'>
                    Built{' '}
                    <span role='img' aria-label='love'>
                        💜
                    </span>{' '}
                    with by Arpit Mohapatra
                </div>
            </footer>
        </div>
    );
};

export default App;
