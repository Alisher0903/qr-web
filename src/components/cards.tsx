import React from 'react';

interface MobileAppCardProps {
  imgSrc?: string;
  title: string;
  description: string;
}

const Cards: React.FC<MobileAppCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full flex flex-row justify-between space-x-4">
      {imgSrc && <img src={imgSrc} alt="Mobile App Icon" className="w-16 h-16" />}
      <h2 className="text-2xl font-bold text-lightGreen">{title}</h2>
      <p className="text-lightGreen">{description}</p>
    </div>
  );
};

export default Cards;
