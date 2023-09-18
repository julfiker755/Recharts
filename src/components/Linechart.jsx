import React from 'react';
import { LineChart as Lchart, Line,CartesianGrid, XAxis, YAxis,Tooltip,Legend,ResponsiveContainer } from 'recharts';

const Linechart = () => {
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
        }
      ];
 
    return (
        <div className='max-w-7xl m-auto'>
        <h1 className='my-10 text-5xl font-semibold'>LineChart</h1>
        <div className='flex justify-center'>
        <ResponsiveContainer width={1000} height={500} >
        <Lchart data={studentData}>
          <Line type="monotone" dataKey="bangla" stroke="red" strokeWidth={2}></Line>
          <Line type="monotone" dataKey="math" stroke="green" strokeWidth={2}></Line>
          <CartesianGrid stroke="green" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis  dataKey="bangla"/>
          <Tooltip />
          <Legend />
        </Lchart>
        </ResponsiveContainer>
        </div>
     </div>
    );
};

export default Linechart;