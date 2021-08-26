import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 function  RenderDish ({dish}) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

 function RenderComments ( {comments} ) {
    const cmnts = comments.map(item => {
      return (
        <li key={item.id}>
          <p>{item.comment}</p>
          <p>-- {item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {cmnts}
        </ul>
      </div>
    );
  }

  const  DishDetail = (props) => {
      return (
        <div className="container">
        <div className="row">
          <RenderDish dish = {props.dish} />
         <RenderComments comments = { props.dish.comments} />
        </div>
        </div>
      );
  }

export default DishDetail;