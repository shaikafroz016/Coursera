import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';



function LeaderList(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Fade in key={leader._id}>
                <div className="col-12 mt-2">
                    Thanks
                </div>
            </Fade>
        );
    });

    if (props.leaders.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.leaders.errMess) {
        return(
            <div className="col-12"> 
                <h4>{props.leaders.errMess}</h4>
            </div>
        );
    }
    else {
        return (
            <Media list>
                <Stagger in>
                    {leaders}
                </Stagger>
            </Media>
        );
    }
}

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 text-white">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6 text-white">
                    <h2>Our History</h2>
                    <p>Courser-S is a world-wide online learning platform founded in 2012 by Stanford computer science professors Andrew Ng and Daphne Koller that offers massive open online courses (MOOC), specializations, and degrees.
                        Courser-S works with universities and other organizations to offer online courses, specializations, and degrees in a variety of subjects, such as engineering, data science, machine learning, mathematics, business, computer science, digital marketing, humanities, medicine, biology, social sciences, and others.
                    </p>
                    <p>As of December 2019, the total number of partners is more than 200 across 29 countries. Course-S mainly works with universities and colleges, but also with corporates and governments. University partners include University of São Paulo in Brazil,[9] University of London[10] in the UK, Indian School of Business of India,[11] Yonsei University in Korea,[12] and institutions like Yale[13], University of Illinois and University of Pennsylvania.[14]</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Don’t worry about doing things perfectly. If you do, you’ll never get things done.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
               <h2> <LeaderList leaders={props.leaders} /></h2>
            </div>
        </div>
    );
}

export default About;    