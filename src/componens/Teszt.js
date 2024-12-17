import React from 'react'

export default function Teszt(props) {
  return (
    <div>
      <div className="card">
    <div className="card-header">{props.adat.kerdes}</div>
    <div className="card-body">
    {props.adat.v2}
    {props.adat.v3}
    {props.adat.v4}
    </div>
    <div className="card-footer"></div>
    </div>
    </div>
  )
}
