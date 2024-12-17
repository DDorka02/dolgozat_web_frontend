import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import { Col, Row } from 'react-bootstrap'

export default function Tesztek() {
  const {tesztlista} = useContext(ApiContext)
  return (
      <main className='container'>
        <Row className='my-4'>
          {}
          <Col xs={12} lg={4} className='mb-4'>
            <Tesztek tesztlista={tesztlista} />
          </Col>
        </Row>
      </main>
  )
};
