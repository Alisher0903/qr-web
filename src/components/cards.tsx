import React from 'react';

interface MobileAppCardProps {
    imgSrc?: string | any;
    title: string;
    description: string;
    imgStyle?: string;
    isIcon?: boolean
}

const Cards: React.FC<MobileAppCardProps> = ({imgSrc, title, description, imgStyle, isIcon}) => {
    return (
        <div className="w-full flex flex-col justify-start">
            {imgSrc && (isIcon ? imgSrc :
                <img src={imgSrc} alt="Mobile App Icon" className={`${imgStyle ? imgStyle : 'w-16 h-16'} rounded-md`}/>)}
            <h2 className={`text-xl sm:text-2xl font-bold text-darkBlue ${imgSrc && 'mt-5'}`}>{title}</h2>
            <p className="text-darkBlue mt-3">{description}</p>
        </div>
    );
};

export default Cards;
