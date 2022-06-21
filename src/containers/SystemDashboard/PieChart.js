import { Chart, Dataset } from 'react-rainbow-components'

const containerStyles = {
  maxWidth: 600,
  minHeight: 400,
  hoverOffset: 2,
}
// const labels = ['Data-Orange', 'Data-White']
const dataset = [
  {
    value: 13,
    color: '#fe4849',
  },

  {
    value: 7,
    color: 'white',
  },
]
function renderDataset() {
  const data = []
  const colors = []
  dataset.forEach(set => {
    data.push(set.value)
    colors.push(set.color)
  })

  return <Dataset title="Data" values={data} backgroundColor={colors} />
}

const PieChartExample = () => (
  <div className="rainbow-p-vertical_xx-large rainbow-p-horizontal_large">
    <div
      style={containerStyles}
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
    >
      <Chart type="doughnut">{renderDataset()}</Chart>
    </div>
  </div>
)
export default PieChartExample
