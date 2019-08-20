import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Content from './app/content';

const Index = () => {
    const [count, setCount] = useState(0);
    const [contentOpen, setContentOpen] = useState(false);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    function handleButtonClick() {
        setCount(count + 1);
        setContentOpen(true);
    };

    return <div>
        <button onClick={handleButtonClick}>
            Click to add
        </button>
        {contentOpen && <Content count={count}/>}
    </div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));
