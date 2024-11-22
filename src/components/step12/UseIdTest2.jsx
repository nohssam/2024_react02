import React, { useId, useRef } from 'react';

function UseIdTest2(props) {
    const id = useId();
    const nameRef = useRef();
    const ageRef = useRef();

    const handleKeyDown = (event, inputType) => {
        if (event.key === 'Enter') {
            if (inputType === 'name') {
                alert(`이름: ${nameRef.current.value}`);
            } else if (inputType === 'age') {
                alert(`나이: ${ageRef.current.value}`);
            }
        }
    };

    return (
        <div>
            <label htmlFor={`${id}-name`}>이름</label>
            <input
                id={`${id}-name`}
                ref={nameRef}
                onKeyDown={(event) => handleKeyDown(event, 'name')} // 이름 입력창 이벤트
                placeholder="이름을 입력하세요"
            />

            <label htmlFor={`${id}-age`}>나이</label>
            <input
                id={`${id}-age`}
                ref={ageRef}
                onKeyDown={(event) => handleKeyDown(event, 'age')} // 나이 입력창 이벤트
                placeholder="나이를 입력하세요"
            />
        </div>
    );
}

export default UseIdTest2;