import React from 'react';

import Card from 'react-bootstrap/Card';

export default function News(props) {
   return (
      <Card>
         <div>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>
                  <a href={props.description}>{props.description}</a>
               </Card.Text>
               <br></br>
            </Card.Body>
         </div>
      </Card>
   );
}
