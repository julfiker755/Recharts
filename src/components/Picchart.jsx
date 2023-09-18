import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Picchart = () => {
    const data1 = [
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
  const data2 = [
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
            <h1 className='my-10 text-5xl font-semibold'>PieChart</h1>
            <div className='flex justify-center'>
                <ResponsiveContainer width={1000} height={400} >
                    <PieChart width={730} height={250}>
                        <Pie data={data1} dataKey="bangla" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data2} dataKey="math" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Picchart;