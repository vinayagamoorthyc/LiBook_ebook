import { Card } from '@nextui-org/react'
import React from 'react'

export default function TopCard(props) {
  return (
    <div>
      <Card
      className="mustreadcard"
    >
      <img
        width={200}
        alt=""
        src={props.url}
      />
    </Card>
    <div style={{textAlign:"start"}}>{props.name}</div>
    </div>
  )
}
