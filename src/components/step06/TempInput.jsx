import React from 'react';

function TempInput({ value, unit, onChang }) {
    return (
        <div>
            <input
                type='number'
                value={value}
                onChange={(e) => onChang(e.target.value)}
                placeholder='In ${unit}'
            />
            <span>{unit}</span>
        </div>
    );
}

export default TempInput;