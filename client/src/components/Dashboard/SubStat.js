import React from 'react';
import { Bar } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';
import '../../css/Mobile.css';

class SubStat extends React.Component {
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
          label: 'סטטיסטיקת מנויים',
          data: [11, 2, 3, 7, 5, 6, 4, 10, 9, 8, 11, 1],
          backgroundColor: [
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)',
            'rgba(167, 65, 74, 1)'
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
            width={280}
            height={200}
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

export default SubStat;
