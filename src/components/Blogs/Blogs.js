import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog-container'>
                <h2>How does react work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='blog-container'>
                <h2>What are the difference between props and state?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='blog-container'>
                <h2>What are the usage of useEffect except data loading in react-js?</h2>
                <p>There are five more cases to use useEffect :
                </p>
                <ol>
                    <li>Running on state change: validating input field.</li>
                    <li>Running on state change: live filtering.</li>
                    <li>Running on state change: trigger animation on new array value.</li>
                    <li>Running on props change: update paragraph list on fetched API data update.</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;