import React from 'react';
import { Bar } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';
import '../../css/Mobile.css';
import moment from 'moment';
// Redux
import { connect } from 'react-redux';

class NewSub extends React.Component {
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
          label: 'סטטיסטיקת חידוש מנויים',
          data: [
            this.props.getReturnClients.length,
            10,
            3,
            4,
            5,
            9,
            7,
            4,
            2,
            10,
            11,
            8
          ],
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
        <MediaQuery maxDeviceWidth={700}>
          <Bar
            width={280}
            height={200}
            data={this.state.dataBar}
            options={this.state.barChartOptions}
          />
        </MediaQuery>
        <MediaQuery deviceWidth={768}>
          <Bar
            width={600}
            height={200}
            data={this.state.dataBar}
            options={this.state.barChartOptions}
          />
        </MediaQuery>

        <MediaQuery minDeviceWidth={1440}>
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
const mapStateToProps = state => ({
  getReturnClients: state.newClientsReducer.getReturnClients
});
export default connect(mapStateToProps)(NewSub);
