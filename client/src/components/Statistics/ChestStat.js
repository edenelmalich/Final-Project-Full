import React from 'react';
import { Bar } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';
import '../../css/Mobile.css';

class ChestStat extends React.Component {
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
          label: 'סטטיסטיקת היקף חזה',
          data: [1, 2, 4, 5, 3, 7, 2, 6, 4, 3, 5, 2],
          backgroundColor: [
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)',
            'rgba(106, 138, 130, 1)'
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

export default ChestStat;
