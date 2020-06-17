import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem ,Label, FormGroup,Input,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform} from 'react-animation-components';

    function RenderDish({dish}) {
            return(
                <div className="col-12 col-md-5 m-1 container">
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            {/*itrating through array to render all the vedios associated to dish */}
                            {dish.links.map((link, index) => (
                                <div key={index}>
                                    <h4>Lecture {index +1}</h4>
                                     <iframe width="560" height="315" src={ link.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myframe"></iframe>
                                     <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        completed
                                        </Label>
                                    </FormGroup>
                                     <br/>
                                </div>
                                ))}
                        <Card>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );

    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null)        
            return (
                <div className="container">
                    <div className="row text-white">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/mycourses'>My Courses</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>All Lecture's for {props.dish.name} Happy learning!!</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row ">
                        <RenderDish dish={props.dish} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;