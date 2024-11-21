import React from 'react'
import ItemList from './ItemList'
const RestaurentCategory = ({ data,expanded,setExpanded,index }) => {

    const { title, itemCards } = data

    const toggleAccordion = () => {
        setExpanded(index);
    };

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 hover:bg-gray-100">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={toggleAccordion}
                >
                    <span className="font-bold text-lg">
                        {title} ({itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {expanded && <ItemList items={itemCards} />}
            </div>
        </div>
    );
}


export default RestaurentCategory