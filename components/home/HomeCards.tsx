import { hospitalData } from '@/public/data/cards-data';
import Image from 'next/image';
import React, { memo } from 'react';

const Cards = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitalData.map((hospital) => (
          <div 
            key={hospital._id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-gray-200 overflow-hidden">
              <Image 
                src={hospital.image} 
                alt={hospital.title} 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-300 ease-in-out" 
                width={500}
                height={300}
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-500 transition-all duration-200 ease-in-out">
                {hospital.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {hospital.description}
              </p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-blue-600">★ {hospital.rating}</span>
                <span className="text-gray-500">{hospital.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Cards);