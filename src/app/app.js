import React, {useEffect, useState} from 'react';
import Content from "./content";
import { hot } from 'react-hot-loader';

const App = () => {
    const [count, setCount] = useState(0);
    const [contentOpen, setContentOpen] = useState(false);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    function handleButtonClick() {
        setCount(count + 1);
        setContentOpen(true);
    }

    return <div>
        <button onClick={handleButtonClick}>
            Click to add
        </button>
        {contentOpen && <Content count={count}/>}
    </div>;
};

export default hot(module)(App);
