import React from 'react';

function TempRadio({ unit, onUnitChange }) {
    return (
        <div>
            <label>
                <input type='radio'
                    value='Celsius'
                    checked={unit === 'Celsius'}
                    onChange={(e) => onUnitChange(e.target.value)}
                />Celsius</label>
            <label>
                <input type='radio'
                    value='Fahrenheit'
                    checked={unit === 'Fahrenheit'}
                    onChange={e => onUnitChange(e.target.value)}
                />Fahrenheit</label>
        </div>
    );
}

export default TempRadio;