import React from 'react';
import { Bar } from 'react-chartjs-2';
// Mobile imports
import '../../css/Mobile.css';
import MediaQuery from 'react-responsive';

class BackhandStat extends React.Component {
  state = {
    dataBar: {
      labels: [
        'ינואר',
        'פברואר',
        'מרץ',
        'אפריל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'ספטמבר',
        'אוקטובר',
        'נובמבר',
        'דצמבר'
      ],
      datasets: [
        {
          label: 'סטטיסטיקת היקף יד אחורית',
          data: [4, 2, 7, 6, 3, 3, 4, 1, 5, 7, 2, 6],
          backgroundColor: [
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)',
            'rgba(217, 172, 42, 1)'
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  render() {
    return (
      <div className='HandState'>
        <MediaQuery maxDeviceWidth={1024}>
          <Bar
            width={350}
            height={230}
            data={this.state.dataBar}
            options={this.state.barChartOptions}
          />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1280}>
          <Bar
            width={350}
            height={325}
            data={this.state.dataBar}
            options={this.state.barChartOptions}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default BackhandStat;
