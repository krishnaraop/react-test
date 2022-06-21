import { Chart, Dataset } from 'react-rainbow-components'
import React from 'react'

function BasicBarChart() {
  const containerStyles = {
    maxWidth: 600,
  }

  return (
    <>
      {' '}
      <h5 className="text-center">BasicBarChart</h5>
      <div className="container">
        <div
          className="rainbow-p-vertical_medium rainbow-m_auto"
          style={containerStyles}
        >
          <div className="rainbow-align-content_center">
            <Chart
              labels={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
              type="bar"
              className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
              disableXAxisGridLines
              disableYAxisGridLines
              disableXAxisBorders
              disableYAxisBorders
              disableXAxisTickLabels
              disableYAxisTickLabels
            >
              <Dataset
                title="Dataset 1"
                values={[23, 45, 123, 56, 66, 100, 30, 156]}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
              />
            </Chart>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicBarChart
