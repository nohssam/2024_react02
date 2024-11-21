import React, { useState } from 'react';

function MemoTest02_2(props) {
    console.log("컴포넌트")
    const [query, setQuery] = useState("")
    const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

    const filterItem = items.filter((k) => {
        console.log("필터")
        return k.toLowerCase().includes(query.toLowerCase());
    });
    return (
        <div>
            <h3>Memo 미 사용 예제</h3>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filterItem.map((k, index) => (
                    <li key={index}>{k}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoTest02_2;