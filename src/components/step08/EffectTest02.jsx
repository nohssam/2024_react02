import React, { useEffect, useState } from 'react';

// useEffect 는 리액트에서 제공하는 훅 중 하나로, 
// 함수형컴포넌트에서 사이드 이펙트를 처리 할수 있도록 도와 줍니다.
// 사이드 이펙트란 컴포넌트의 렌더링 외의 작업(**데이터가져오기,DOM 수정 등)을 의미한다.

// useEffect는 상태 변경으로 인해 발생한 레더링 이후에 실행됩니다.
// 의존성 배열을 통해 특정 상태나 속성의 변화만에 반응하도록 제한
// 의존성 배열이 없으면 갱신될때 마다 호출
// 의존성 배열이 [] 이면 처음 한번하고 다시 호출 안함

// 형식) 
// useEffect(()=>{
//     실행할 작업
//     return 화살표 함수는 생략 가능
//     [return()=>{ 
//        정리작업(clean-up) 작업
//       }]       
// },[의존성배열1, 의존성배열2]);

function EffectTest02(props) {
    const [count, setCount] = useState(5)
    // useEffect(() => {
    //     document.title = `총 ${count}번 클릭 했습니다.`
    // }, []); // 최초 한번만

    useEffect(() => {
        document.title = `총 ${count}번 클릭 했습니다.`
    }, [count]);
    return (
        <div>
            <p>총 {count}번 출력했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}


export default EffectTest02;      