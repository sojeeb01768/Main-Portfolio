// RadialProgress.js

import React from 'react';

const RadialProgress = ({ progress }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative">
            <svg className="w-28 h-28 lg:w-36 lg:h-36">
                <circle
                    className="text-gray-200"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                />
                <circle
                    className="text-green-500"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <span className="absolute top-14 left-14 text-lg font-semibold text-green-500">
                {progress}%
            </span>
        </div>
    );
};

export default RadialProgress;
