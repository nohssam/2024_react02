import { Button } from '@mui/material';
import React, { useState } from 'react';

function CountEx(props) {
    // 화면은 변경되지 않는다.
    // let count = 5
    // const setCount = (num) => {
    //     count = num
    //     console.log(count);
    // }

    // 값이 변경되서 화면을 재렌더링 할때 사용
    // useState => state를 업데이트 되면 재렌더링
    // const[5, setCount]
    // const [count, setCount] = useState(3);

    // return (
    //     <div>
    //         <h2>Count : {count}</h2>
    //         <Button variant="outlined"
    //             onClick={() => setCount(count + 1)}
    //         > + </Button>
    //         <Button variant="outlined"
    //             onClick={() => setCount(count - 1)}
    //         > - </Button>
    //     </div>
    // );


    const [count, setCount] = useState(3);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h2>Count : {count}</h2>
            <Button variant="outlined"
                onClick={increment}
            > + </Button>
            <Button variant="outlined"
                onClick={decrement}
            > - </Button>
        </div>
    );
}

export default CountEx;