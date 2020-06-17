import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Media,  Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish, deleteFavorite , onClick}) {
    return(
        <div className="col-12 col-md m-1">
        <Media tag="li">
            <Card>
                <Link to={`/mycourses/${dish._id}`} >
                    <CardImg width="300" height="315" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>

            {/*<Media left middle>
            
               {/* <iframe width="560" height="315" src={ dish.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myframe"></iframe>
            </Media>*/}
            <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
                    <span className="fa fa-times"></span>DELETE
                </Button>
            </Media>
        </Media>
        </div>
        
    );
}

const Favorites = (props) => {

    if (props.favorites.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites) {

        const favorites = props.favorites.favorites.dishes.map((dish) => {
            return (
                <div className="col-12 col-md m-1" key={dish._id} className="col-12 mt-5">
                    <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Courses</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 text-white">
                        <h3>My Courses</h3>
                        <hr />
                    </div>
                </div>
                <div className="row text-white">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no Courses</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;