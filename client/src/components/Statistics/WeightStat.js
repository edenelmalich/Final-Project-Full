import React from 'react';
import { Bar } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';
import '../../css/Mobile.css';

class WeightStat extends React.Component {
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
          label: 'סטטיסטיקת משקל',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: [
            'rgba(255, 134,159,0.4)',
            'rgba(98,  182, 239,0.4)',
            'rgba(255, 218, 128,0.4)',
            'rgba(113, 205, 205,0.4)',
            'rgba(170, 128, 252,0.4)',
            'rgba(255, 177, 101,0.4)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(255, 134, 159, 1)',
            'rgba(98,  182, 239, 1)',
            'rgba(255, 218, 128, 1)',
            'rgba(113, 205, 205, 1)',
            'rgba(170, 128, 252, 1)',
            'rgba(255, 177, 101, 1)'
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

export default WeightStat;
