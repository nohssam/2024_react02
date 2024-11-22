import React, { useEffect, useId, useRef } from 'react';

// useId 란 고유한 ID를 생성한다.
function UseIdTest(props) {
    const id = useId();
    const inputRef = useRef();

    useEffect(() => {
        // 가져올수없다. (useRef 사용)
        // const element = document.querySelector(id);
        // console.log(element);

        // 아이디만 출력 (다음 예제에 alert 출력)
        const element = inputRef.current;
        console.log(element);

        // const element2 = ageRef.current;
        // console.log(element2);
    }, []);


    return (
        <div>
            {/* <label htmlFor={id}>이름</label>
            <input id={id} ref={inputRef} /> */}

            {/* 만약 여러개일 경우 */}
            {/* <label htmlFor={age}>나이</label>
            <input id={age} ref={ageRef} /> */}

            <label htmlFor={`${id}-name`}>이름</label>
            <input id={`${id}-name`} />

            <label htmlFor={`${id}-age`}>나이</label>
            <input id={`${id}-age`} />

        </div>
    );
}

export default UseIdTest;