import React from 'react';
import { HorizontalBar, Line, Bar, defaults } from 'react-chartjs-2';
import './App.css';

defaults.global.legend.display = false;

const barVertical = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      backgroundColor: '#DA3849',
      borderColor: '#DA3849',
      borderWidth: 1,
      barThickness: 50,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 10],
    }
  ]
};

const barHorizontal = {
  labels: [
    'Carson Freeman',
    'Jessica Dotson',
    'Rodgers Marks',
    'Richardson Riddle',
    'Alyson Beard',
    'Decker Cooper',
    'Neal Dickson',
    'Valdez Newman',
    'Vaughn Hobbs',
    'Rodgers Marks',
  ],
  datasets: [
    {
      backgroundColor: '#FEC02F',
      borderSkipped: true,
      barThickness: 8,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 10],
    }
  ]
};

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#FEC02F',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FEC02F',
      pointBackgroundColor: '#FEC02F',
      pointBorderWidth: 1,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#FEC02F',
      pointHoverBorderColor: '#FEC02F',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const line2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#6F47BE',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#6F47BE',
      pointBackgroundColor: '#6F47BE',
      pointBorderWidth: 1,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#6F47BE',
      pointHoverBorderColor: '#6F47BE',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const barHorizontal2 = {
  labels: [
    'Carson Freeman',
    'Jessica Dotson',
    'Rodgers Marks',
    'Richardson Riddle',
    'Alyson Beard',
    'Decker Cooper',
    'Neal Dickson',
    'Valdez Newman',
    'Vaughn Hobbs',
    'Rodgers Marks',
  ],
  datasets: [
    {
      backgroundColor: '#25A2B7',
      borderSkipped: true,
      barThickness: 8,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 10],
    }
  ]
};

const line3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#25A2B7',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#25A2B7',
      pointBackgroundColor: '#25A2B7',
      pointBorderWidth: 1,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#25A2B7',
      pointHoverBorderColor: '#25A2B7',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <div className="full">
        <h2>Active Users</h2>
        <Bar
          data={barVertical}
          height={90}
        />
      </div>
      <div className="seventy">
        <h2>Referrals Submitted</h2>
        <Line data={line} />
      </div>
      <div className="thirty">
        <h2>TOP 10 Referrers</h2>
        <HorizontalBar
          data={barHorizontal}
          height={225}
        />
      </div>
      <div className="full">
        <h2>Unleash+ Spent</h2>
        <Line
          data={line2}
          height={90}
        />
      </div>
      <div className="thirty">
        <h2>TOP 10 Most Popular Vault Items</h2>
        <HorizontalBar
          data={barHorizontal2}
          height={225}
        />
      </div>
      <div className="seventy">
        <h2>Vault Items Purchased</h2>
        <Line data={line3} />
      </div>
    </div>
  );
}

export default App;


