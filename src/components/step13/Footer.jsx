import React from 'react';

function Footer({ isDark, setIsDark }) {
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <footer
            className='footer'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}
        >
            <button className='button' onClick={toggleTheme}>Dark Mode</button>
        </footer>
    );
}

export default Footer;