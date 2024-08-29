// Dashboard.js
import React from 'react';
import { LineChart, Line, PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '6/30/2024', orders: 4, sales: 1404 },
  { date: '7/6/2024', orders: 3, sales: 1000 },
  { date: '7/13/2024', orders: 2, sales: 800 },
  { date: '7/27/2024', orders: 2, sales: 700 },
];

const pieData = [
  { name: 'WooCommerce Store', value: 44.2 },
  { name: 'Shopify Store', value: 55.8 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div>
      <h2>Sales vs Orders</h2>
      <ResponsiveContainer width="50%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="orders" stroke="#ff7300" />
          <Line type="monotone" dataKey="sales" stroke="#387908" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div>
      <h2>Portion of Sales</h2>
      <ResponsiveContainer width="50%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={pieData} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Dashboard;
