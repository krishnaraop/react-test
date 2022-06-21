import { Card, CardGroup } from 'react-bootstrap'
import PieChartExample from './PieChart'

function Cards() {
  return (
    <>
      <div className="container">
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Conversations Records Summary</Card.Title>
              <br />
              <input type="date" name="Daily" id="daily" className="m-2" />{' '}
              <br />
              <Card>
                <PieChartExample />
              </Card>
              <p>Total conversations</p>
              <small>2942739</small>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago..</small>
            </Card.Footer>
          </Card>
          <Card className="mx-2">
            <Card.Body>
              <Card.Title>Conversations Records Summary</Card.Title>
              <br />
              <input type="week" name="Monthly" id="daily" className="m-2" />
              <br />
              <Card>
                <PieChartExample />
              </Card>
              <p>Total conversations</p>
              <small>2942739</small>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago..</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Conversations Records Summary</Card.Title>
              <br />
              <input
                type="month"
                name="Date-range"
                id="daily"
                className="m-2"
              />{' '}
              <br />
              <Card>
                <PieChartExample />
              </Card>
              <p>Total conversations</p>
              <small>2942739</small>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago..</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  )
}

export default Cards
