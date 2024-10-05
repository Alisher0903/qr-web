import React from 'react';

interface MobileAppCardProps {
  imgSrc?: string;
  title: string;
  description: string;
}

const Cards: React.FC<MobileAppCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {imgSrc && <img src={imgSrc} alt="Mobile App Icon" className="w-16 h-16" />}
      <h2 className="text-xl font-bold text-lightGreen">{title}</h2>
      <p className="text-lightGreen">{description}</p>
    </div>
  );
};

export default Cards;
