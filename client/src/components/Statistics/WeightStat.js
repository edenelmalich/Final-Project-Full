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
          data: [50, 80, 10, 82, 70, 60, 75, 89, 55, 67, 90, 72],
          backgroundColor: [
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)',
            'rgba(65, 89, 57, 1)'
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
