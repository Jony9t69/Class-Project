import React, { useEffect, useState } from "react";
import CategoriesNavbar from "./CategoriesNavbar";
import Card from "./Card";

function Picture() {
    const [location, setLocation] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("Location.json")
            .then((res) => res.json())
            .then((data) => {
                setLocation(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error loading data:", error));
    }, []); 

    const categories = ["All", ...new Set(location.map((m) => m.category))];

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="p-6">
            <CategoriesNavbar categories={categories} />

            <h1 className="text-[40px] font-bold text-white mt-10 mb-6 text-center">
                Check Our Epic Top Destinations 
            </h1>
            <div className=" container items-center justify-around mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20  mb-20 ">
                
                {location.map((item) => (
                    <Card 
                        key={item.id} 
                        item={item} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Picture;