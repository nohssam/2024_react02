import React, { useEffect, useMemo, useState } from 'react';

function MemoTest04(props) {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // input를 누르면 location 아니므로 useEffect 내용출력 안됨
    // 1. 기본자료형 에는 값이 저장된다.
    // const location = isKorea ? '한국' : '외국';

    // 2. 객체: 렌더링되면서 객체가 생성되고 생성된객체의주소가 변경되서 저장된다.
    // const location = {
    //     country: isKorea ? '한국' : '외국'
    // };

    // 3. Memo을 사용하자 
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국'
        };
    }, [isKorea]);


    useEffect(() => {
        console.log('useEffect 호출')
    }, [location]);



    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <hr />
            <h2>어느 나라 사람에 있나요?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
}

export default MemoTest04;