import React from 'react';

interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    fill?: boolean;
  }[];
}

interface ChartProps {
  type: 'bar' | 'line' | 'doughnut';
  data: ChartData;
}

export function Chart({ type, data }: ChartProps) {
  // This is a simplified chart component for demonstration
  // In a real application, you would use a library like Chart.js or Recharts
  
  const renderBarChart = () => {
    const maxValue = Math.max(...data.datasets[0].data);
    
    return (
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const height = (value / maxValue) * 100;
          
          return (
            <div key={label} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderLineChart = () => {
    return (
      <div className="h-48 flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-gray-500">Line Chart Visualization</p>
      </div>
    );
  };

  const renderDoughnutChart = () => {
    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    
    return (
      <div className="flex items-center justify-between h-48">
        <div className="w-48 h-48 relative">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {data.datasets[0].data.map((value, index) => {
              const percentage = (value / total) * 100;
              const circumference = 2 * Math.PI * 40;
              const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
              const colors = data.datasets[0].backgroundColor as string[];
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={colors[index]}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="round"
                  style={{
                    transform: `rotate(${data.datasets[0].data.slice(0, index).reduce((sum, v) => sum + (v / total) * 360, 0)}deg)`,
                    transformOrigin: '50% 50%',
                  }}
                />
              );
            })}
          </svg>
        </div>
        <div className="ml-6 space-y-2">
          {data.labels.map((label, index) => {
            const colors = data.datasets[0].backgroundColor as string[];
            return (
              <div key={label} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: colors[index] }}
                ></div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  switch (type) {
    case 'bar':
      return renderBarChart();
    case 'line':
      return renderLineChart();
    case 'doughnut':
      return renderDoughnutChart();
    default:
      return <div>Unsupported chart type</div>;
  }
}