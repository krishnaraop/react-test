import { Chart, Dataset } from 'react-rainbow-components'

const containerStyles = {
  maxWidth: 800,
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const values = [18, 42, 58, 50, 19, 0, 24, 50, 33, 20, 5, 35]

const BarChartExample = () => (
  <div className="container">
    <div className="rainbow-p-vertical_large">
      <div
        style={containerStyles}
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
      >
        <Chart labels={labels} type="bar">
          <Dataset
            key="Sales"
            title="Sales"
            values={values}
            backgroundColor="#01b6f5"
          />
        </Chart>
      </div>
    </div>
  </div>
)

export default BarChartExample
