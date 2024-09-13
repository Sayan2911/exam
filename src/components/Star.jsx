/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Star = ({ value }) => {
    const [starCount, setStarCount] = useState([]);

    useEffect(() => {
        const getStars = (value) => {
            // eslint-disable-next-line react/jsx-key
            if (value === 0) return [<IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value > 0 && value <= 0.5) return [<IoMdStarHalf />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 0.5 && value <= 1) return [<IoMdStar />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 1 && value <= 1.5) return [<IoMdStar />, <IoMdStarHalf />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 1.5 && value <= 2) return [<IoMdStar />, <IoMdStar />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 2 && value <= 2.5) return [<IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 2.5 && value <= 3) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarOutline />, <IoMdStarOutline />];
            if (value >= 3 && value <= 3.5) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStarOutline />];
            if (value >=3.5 && value <= 4) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarOutline />];
            if (value >= 4 && value <= 4.5) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />];
            if (value >= 4.5 && value < 5) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />];
            if (value === 5) return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />];
        };

        setStarCount(getStars(value));
    }, [value]);

    return (
        <div>
            {starCount.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}

export default Star;