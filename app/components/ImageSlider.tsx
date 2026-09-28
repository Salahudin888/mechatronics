"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/mechatronics1.jpg",
    "/images/mechatronics2.jpg",
    "/images/mechatronics3.jpg",
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px]">
            {images.map((image, index) => (
                <Image
                    key={image}
                    src={image}
                    alt={`Mechatronics ${index + 1}`}
                    fill
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2.5 w-2.5 rounded-full ${index === current ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}