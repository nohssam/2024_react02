import React, { useEffect, useState } from 'react';

function EffectTest03(props) {
    const [count, setCount] = useState(0);   // useEffect가 관리
    const [count2, setCount2] = useState(0); // useEffect가 관리 X
    const [text, setText] = useState("");    // 입력값 관리 useEffect가 관리 X

    console.log("컴포넌트 렌더링 발생");

    useEffect(() => {
        console.log("useEffect가 실행됨");
    }, [count]);
    return (
        <div>
            <h1>useState와 useEffect 비교</h1>
            <p>Count (useEffect)가 관리 : {count}</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <br />

            <p>Count (useEffect)가 관리 안함: {count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>클릭</button>
            <br />

            <p>텍스트 입력 ; {text}</p>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default EffectTest03;