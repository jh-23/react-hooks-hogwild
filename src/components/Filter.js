import React from 'react';

function Filter( {filterHogs, onUpdateGreasedFilter, sortBy, handleSorting }) {
    return (
        <div>
            <label>Show Only Greased?
            <input  type="checkbox" checked={filterHogs} onChange={() => onUpdateGreasedFilter()} />
            </label>
            <select value={sortBy} onChange={() => handleSorting()} >
                <option value="name" >Sort by name</option>
                <option value="weight" >Sort by weight</option>
            </select>
        </div>
    )
}

export default Filter;