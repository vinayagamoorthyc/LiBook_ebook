import React from "react";
import {Card} from "@nextui-org/react";

export default function MustReadCard(props) {

  return (
    <div>
      <Card className="mustreadcard">
      <img
        alt=""
        src={props.url}
      />
    </Card>
    <div style={{textAlign:"start"}}>{props.name}</div>
    </div>
  );
}
