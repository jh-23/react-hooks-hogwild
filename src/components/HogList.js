import React, {useState} from "react";
import HogTile from "./HogTile";

import Filter from "./Filter";

function HogList ({hogs}) {

    const [filterHogs, setFilterHogs] = useState(true);
    const [sortBy, setSortBy] = useState("name"); // name or weight sorting

    const filteredHogs = hogs.filter(hog => {
        if(filterHogs) {
            return hog.greased
        } else {
            return true
        }
    })

    const sortedHogs = filteredHogs.sort((hogA, hogB) => {
        if(sortBy === "name") {
            return hogA.name.localeCompare(hogB.name)
        } else {
            return hogA.weight - hogB.weight
        }
    })

    const hogTiles = filteredHogs.map(hog => <HogTile hog={hog} key={hog.name} />)

    function handleUpdateGreasedFilter() {
        setFilterHogs(!filterHogs)
    }

    function handleSorting(newSort) {
        setSortBy(newSort)
    }

    return (
        <div>
            <Filter filterHogs={filterHogs} onUpdateGreasedFilter={handleUpdateGreasedFilter} sortBy={sortBy} handleSorting={handleSorting} />
            {hogTiles}
       </div>
    )
}

export default HogList;