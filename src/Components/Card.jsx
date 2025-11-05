

import React from 'react';

function Card({ item }) { 
    
    if (!item) return null; 

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-shadow ">
            
            <div className="h-50">
                <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.summary}</p>
                
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-500">
                        📍 {item.location.district}
                    </span>
                    <span className="font-semibold text-yellow-600">
                        ⭐ {item.rating}
                    </span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-green-600">৳ {item.cost_estimate_bdt}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;