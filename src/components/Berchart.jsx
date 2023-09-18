import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Berchart = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            bangla: 85,
            math: 92,
        },
        {
            id: 2,
            name: "Jane Smith",
            bangla: 50,
            math: 50,
        },
        {
            id: 3,
            name: "Alice Johnson",
            bangla: 60,
            math: 60,
        },
        {
            id: 4,
            name: "Bob Wilson",
            bangla: 88,
            math: 90,
        },
        {
            id: 5,
            name: "Eva Davis",
            bangla: 70,
            math: 85,
        },
        {
            id: 6,
            name: "David Lee",
            bangla: 80,
            math: 96,
        },
        {
            id: 7,
            name: "Linda Garcia",
            bangla: 82,
            math: 89,
        },
        {
            id: 8,
            name: "Mark Brown",
            bangla: 79,
            math: 86,
        }]
    return (
        <div className='max-w-7xl m-auto'>
            <h1 className='my-10 text-5xl font-semibold'>BarChart</h1>
            <div className='flex justify-center'>
                <ResponsiveContainer width={1000} height={400} >
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="bangla" fill="#8884d8" />
                        <Bar dataKey="math" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Berchart;