import React, { useMemo, useState } from 'react';

const hardCalcu = (num) => {
    console.log("hardCalcu : ");
    for (let i = 0; i < 999999999; i++) { }
    for (let i = 0; i < 999999999; i++) { }
    for (let i = 0; i < 999999999; i++) { }
    return num + 10000;
}
const easyCalcu = (num) => {
    console.log("easyCalcu : ");
    return num + 10000;
}

function MemoTest03(props) {
    console.log("컴포넌트")
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // hardNumber 값이 변경 될 때만 실행 (렌더링됨) 
    const hardSum = useMemo(() => {
        return hardCalcu(hardNumber);
    }, [hardNumber])

    const easySum = easyCalcu(easyNumber)

    return (
        <div>
            <h3>계산기</h3>
            <input type='number'
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>
            <hr />
            <h3>계산기2</h3>
            <input type='number'
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {easySum}</span>
            <hr />
        </div>
    );
}

export default MemoTest03;