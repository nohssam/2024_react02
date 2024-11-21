import React, { useEffect, useState } from 'react';

function EffectTest04(props) {
    const [data, setData] = useState([]);     // api에서 가져온 데이터를 저장
    const [error, setError] = useState(null); // 에러 상태 관리

    useEffect(() => {
        // API 호출
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network error')
                }
                return response.json();  // 응답 데이터를 JSON 형태로 변환,
            })
            // .then((data) => setData(data))  // 위에서 json형태로 변환된 데이터를 받아 setData로 넘긴다.
            .then((data) => setData(data.slice(0, 3)))
            .catch((error) => setError(error.message));
    }, []);
    return (
        <div>
            <ul>
                {data.map((k) => (
                    <li key={k.id}>
                        <h3>{k.name}</h3>
                        <p>가격 : {k.price}</p>
                        <img src={k.image_link} width="100px" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EffectTest04;