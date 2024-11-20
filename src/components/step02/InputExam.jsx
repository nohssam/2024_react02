import React from 'react';
import './inputExam.css'
import { TextField } from '@mui/material';

function InputExam(props) {
    return (
        <div className='center'>
            <input onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')} /> <br /><br />

            {/* 해당 입력요소의 값이 바뀔때 발생, 이벤트가 발생한 요소를 가리킨다 */}
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                onChange={(e) => console.log(e.target.value)}
            /><br /><br />

            <TextField id="standard-basic" label="Standard" variant="standard"
                onKeyUp={(e) => console.log(e.key, 'UP')}
            /><br /><br />

        </div>
    );
}

export default InputExam;