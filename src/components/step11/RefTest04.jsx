import React, { useEffect, useRef, useState } from 'react';

function RefTest04(props) {
    const [count, setCount] = useState(0);
    const [btn1, setBtn1] = useState(0);
    const [btn2, setBtn2] = useState(0);
    const randCount = useRef(0);

    useEffect(() => {
        console.log("렌더링 수 : ", randCount.current)
        randCount.current = randCount.current + 1;
    }, [count]);

    const btn1Click = () => {
        setBtn1(btn1 + 1);
        setCount(count + 4);
    }

    const btn2Click = () => {
        setBtn2(btn2 + 1);
        setCount(count + 3);
    }

    return (
        <div>
            <p>State : {count}</p>
            <p>버튼1 클릭횟수 : {btn1}</p>
            <p>버튼2 클릭횟수 : {btn2}</p>
            <p>전체 클릭횟수 : {randCount.current}</p>
            <button onClick={btn1Click}>버튼1(+4)</button>
            <button onClick={btn2Click}>버튼2(+3)</button>
        </div>
    );
}

export default RefTest04;