import { Button } from '@mui/material';
import React from 'react';

function NumberCounter(props) {
    function handleClick() {
        console.log('Event1');
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>버튼1</Button> <br /><br />
            <Button variant="outlined" onClick={() => { console.log('Event2') }}>버튼2</Button> <br /><br />
        </div>
    );
}

export default NumberCounter;