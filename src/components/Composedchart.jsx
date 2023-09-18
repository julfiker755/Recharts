import React from 'react';
import {ComposedChart,Line,Area,Bar, XAxis,YAxis,CartesianGrid,Tooltip,Legend,Scatter,ResponsiveContainer,} from 'recharts';

const Composedchart = () => {
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
        <h1 className='my-10 text-5xl font-semibold'>ComposedChart</h1>
        <div className='flex justify-center'>
                <ResponsiveContainer width={1000} height={400} >
                    <ComposedChart width={730} height={250} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="math" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="bangla" stroke="#ff7300" />
                    </ComposedChart>
            </ResponsiveContainer>
        </div>
    </div>
    );
};

export default Composedchart;