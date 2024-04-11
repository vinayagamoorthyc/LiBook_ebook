import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function MustReadCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card
      className=""
    >
      <img
        alt="Woman listing to music"
        src="https://m.media-amazon.com/images/I/618y2EiIa7L._AC_UF1000,1000_QL80_.jpg"
      />
    </Card>
  );
}
