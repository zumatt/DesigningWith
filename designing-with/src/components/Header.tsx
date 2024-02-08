import React from 'react';

const Header = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    return(
        <div className='h-full w-full'>
            <div className='flex flex-row gap-2'>
                <a className='flex justify-center bg-white rounded-lg px-2' href='/'>Designing With AI</a>
                <button onClick={onClick} className='flex justify-start bg-white rounded-lg px-2'>+</button>
                { showResults ? <Results /> : null }
                
            </div>
        </div>


    );

    
}

export default Header;

const Results = () => (
    <div className='flex flex-col h-4 gap-2'>
        <a className='flex justify-center bg-purple rounded-lg px-2' href='/'>About</a>
        <a className='flex justify-center bg-blue rounded-lg px-2' href='/'>AI for Designers</a>
        <a className='flex justify-center bg-grey rounded-lg px-2' href='/'>Interactive Framework</a>
        <a className='flex justify-center bg-green rounded-lg px-2' href='/'>Didactic Guidelines</a>
        <a className='flex justify-center bg-orange rounded-lg px-2' href='/'>Resources</a>
        <a className='flex justify-center bg-beige rounded-lg px-2' href='/'>Let’s talk!</a>
    </div>
)