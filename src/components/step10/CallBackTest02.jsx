import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
    const [number, setNumber] = useState(0);

    // useEffect에서 input에서 증가/감소 클릭할 때마다 리렌더링이되면 
    // someFunction 의 객체(함수) 새로 생성 되면거 변경된것을 감지해서 
    // const someFunction = () => {
    //     console.log(`someFunc : number : ${number}`);
    //     return;
    // }


    // useCallback은 함수를 자체를 저장한다.
    // 버튼을 누르면 someFunc : number : 0 나오다 이유는 useCallback 저장할때 당시 number0이었다.
    // const someFunction = useCallback(() => {
    //     console.log(`someFunc : number : ${number}`);
    //     return;
    // }, []);

    //  const someFunction = useCallback(() => {
    //     //     console.log(`someFunc : number : ${number}`);
    //     //     return;
    //     // }, [number]);

    // const someFunction = useCallback((number) => {
    //     console.log(`someFunc : number : ${number}`);
    //     return;
    // }, []);

    const someFunction = useCallback((number) => {
        console.log(`someFunc : number : ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        console.log("someFunc 변경 되었네요")
    }, [someFunction]);

    return (
        <div>
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <button onClick={() => someFunction()}>someFunction 함수 호출</button>
            <button onClick={() => someFunction(number)}>someFunction 함수 호출</button>
        </div>
    );
}

export default CallBackTest02;