import { Chart, Dataset } from 'react-rainbow-components'

const containerStyles = {
  maxWidth: 600,
}
const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
const datasets = [
  {
    title: 'Sales',
    borderColor: '#fe4849',
    values: [37, 15, 90, 57, 80, 14],
  },
  {
    title: 'Profits',
    borderColor: '#01b6f5',
    values: [18, 39, 15, 38, 15, 35],
  },
]
function renderDatasets() {
  return datasets.map(({ title, values, borderColor }) => (
    <Dataset
      key={title}
      title={title}
      values={values}
      borderColor={borderColor}
      backgroundColor={borderColor}
    />
  ))
}

const LineChartExample = () => (
  <div className="container">
    <div className="rainbow-p-vertical_large rainbow-m-bottom_large">
      <div
        style={containerStyles}
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
      >
        <Chart labels={labels} type="line">
          {renderDatasets()}
        </Chart>
      </div>
    </div>
  </div>
)
export default LineChartExample
