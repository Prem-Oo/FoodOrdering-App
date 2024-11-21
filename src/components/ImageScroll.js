import { useRef } from 'react';
import { IMG_URL } from './config';
const ImageScroll = ({ imgData }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="flex items-center justify-center space-x-4 my-4 mb-6">
            <button
                onClick={scrollLeft}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
                ←
            </button>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-hidden whitespace-nowrap p-2 space-x-4 w-2/3 h-1/4 border-b border-gray-300"
            >
                {imgData.map((imgObj) => (
                    <img
                        key={imgObj.id}
                        src={IMG_URL + imgObj.imageId}
                        alt="food"
                        className="w-1/6 h-1/6 rounded-full"
                    />
                ))}
            </div>
            <button
                onClick={scrollRight}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
                →
            </button>
        </div>
    );
};

export default ImageScroll;
