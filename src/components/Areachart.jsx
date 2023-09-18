import React from 'react';
import { AreaChart as Achart, CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts';
const Areachart = () => {
    const studentData = [
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
    //  AreaChart
    return (
        <div className='max-w-7xl m-auto'>
            <h1 className='my-10 text-5xl font-semibold'>AreaChart</h1>
            <div className='flex justify-center'>
            <ResponsiveContainer width={1000} height={400} >
            <Achart width={730} height={250} data={studentData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="bangla" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="math" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </Achart>
            </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Areachart;