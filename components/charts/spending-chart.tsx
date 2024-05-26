import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const SpendingChart = () => {
  const data = [
    { name: 'Rent', value: 400 },
    { name: 'Utilities', value: 300 },
    { name: 'Clothing', value: 300 },
    { name: 'Other', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend  />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SpendingChart;
