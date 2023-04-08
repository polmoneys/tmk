import {
  Col,
  Couple,
  Grid,
  Group,
  KeyValue,
  Layers,
  List,
  Row,
} from 'tmk-react'
import '../node_modules/tmk-react/dist/style.css'

import {
  type Author,
  Icon,
  keyValueDemo,
  type Minimal,
  imperialStats,
  rebelsStats,
} from './utils'
import './App.css'

function App(): JSX.Element {
  return (
    <main>
      <header>
        <h1>TMK</h1>
      </header>
      <Col
        as="section"
        options={{
          DANGEROUS: {
            padding: '2vw',
          },
        }}
        gap="2em"
      >
        <Row as="div" gap="2em">
          <div style={{ flexGrow: 1 }}>
            <Couple as="div">
              <p style={{ display: 'flex' }}>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
              </p>
              <p
                style={{
                  backgroundColor: 'gray',
                  padding: '0.1em 0.3em',
                  borderRadius: '.2em',
                }}
              >
                React
              </p>
            </Couple>
          </div>
          <div style={{ width: '120px' }}>
            <Couple as="div">
              <p style={{ display: 'flex' }}>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
              </p>
              <p
                style={{
                  backgroundColor: 'gray',
                  padding: '0.1em 0.3em',
                  borderRadius: '.2em',
                }}
              >
                React
              </p>
            </Couple>
          </div>
        </Row>
        <Layers as="div">
          <p>
            <Icon />
          </p>
          <p
            style={{
              backgroundColor: 'gray',
              padding: '0.1em 0.3em',
              borderRadius: '.2em',
            }}
          >
            React
          </p>
        </Layers>

        <Row as="div" gap="2em">
          <Row
            as="div"
            options={{
              DANGEROUS: {
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,.1)',
                padding: '0.2em',
              },
            }}
          >
            <Icon />
            <Icon />
            <Icon data-margin-auto="left" />
          </Row>
          <Row
            as="div"
            options={{
              DANGEROUS: {
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,.2)',
                padding: '0.2em',
              },
            }}
          >
            <Icon />
            <Icon />
            <Icon data-margin-auto="right" />
            <Icon />
          </Row>

          <Row
            as="div"
            options={{
              DANGEROUS: {
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,.3)',
                padding: '0.2em',
              },
            }}
          >
            <Icon data-margin-auto="right" />
            <Icon />
            <Icon />
          </Row>
        </Row>

        <Row as="div" gap="2em">
          <Col
            as="div"
            options={{
              DANGEROUS: {
                minHeight: '90px',
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,.1)',
                padding: '0.2em',
              },
            }}
          >
            <Icon />
            <Icon />
            <Icon data-margin-auto="top" />
          </Col>

          <Col
            as="div"
            options={{
              DANGEROUS: {
                minHeight: '90px',
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,.1)',
                padding: '0.2em',
              },
            }}
          >
            <Icon data-margin-auto="bottom" />
            <Icon />
            <Icon />
          </Col>
        </Row>

        <Row as="aside">
          <KeyValue<Author>
            datum={keyValueDemo}
            className="custom-container"
            itemClassName="custom-entry"
            onRender={content => {
              if (typeof content === 'string') {
                return content
              }
              return `${content.firstName} ${content.lastName}${
                content.role !== undefined ? ` (${content.role})` : ''
              }`
            }}
          />
          <KeyValue<Minimal>
            datum={imperialStats}
            className="custom-container"
            itemClassName="custom-entry"
            onRender={content => {
              if (typeof content === 'string') {
                return content
              }
              return `${content.name}`
            }}
          />
          <KeyValue<Minimal>
            datum={rebelsStats}
            className="custom-container"
            itemClassName="custom-entry"
            onRender={content => {
              if (typeof content === 'string') {
                return content
              }
              return `${content.name}`
            }}
          />
        </Row>

        <List label="people">
          <List.Divider>
            <p>5 results</p>
          </List.Divider>
          {[...Array(5)].map((people, pos: number) => (
            <List.Item start={<Icon />} end={<p>Lorem ispun</p>} key={pos}>
              <b>Item #{pos}</b>
              <p>Lorem ipsun dolor sit amet</p>
            </List.Item>
          ))}
        </List>

        <Grid as="div" gap="2em">
          <Group
            as="div"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="landscape"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
        </Grid>
        <Grid as="div" gap="2em">
          <Group
            as="div"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="portrait"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
        </Grid>
        <Grid as="div" gap="2em">
          <Group
            as="div"
            ratio="square"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="square"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="square"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
          <Group
            as="div"
            ratio="square"
            data-place-items="center"
            data-place-content="center"
          >
            <Icon />
          </Group>
        </Grid>
      </Col>
    </main>
  )
}

export default App
