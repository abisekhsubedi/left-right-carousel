import { useState } from 'react'
import { Button, Pagination, Spacer } from "@nextui-org/react";
import './app.css'
import Dashboard from '../pages/dashboard';
import Gallary from '../pages/gallery';

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>

                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>

            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button size="lg" className='nxt-btn' onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Dashboard />
            <Spacer y={2}/>
            <Gallary/>
            <Spacer y={1} />
            <Pagination total={20} initialPage={1}></Pagination>
        </div>
    )
}

export default App;
