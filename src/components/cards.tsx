import React from 'react';

interface MobileAppCardProps {
  imgSrc?: string;
  title: string;
  description: string;
}

const Cards: React.FC<MobileAppCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full flex flex-col justify-start">
      {imgSrc && <img src={imgSrc} alt="Mobile App Icon" className="w-16 h-16" />}
      <h2 className={`text-2xl font-bold text-darkBlue ${imgSrc && 'mt-5'}`}>{title}</h2>
      <p className="text-darkBlue mt-3">{description}</p>
    </div>
  );
};

export default Cards;
