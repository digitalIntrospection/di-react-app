import React, { Component } from 'react';
import '../../App.css';


class Our_Commitment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {

        fetch('http://digital-introspection.local/wp-json/wp/v2/posts?_embed', { mode: 'cors' })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {

        const { isLoaded, items } = this.state;


        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="commitment-container">
                <div className="text-container">
                    <div className="small-header">Our Commitment</div>
                    <div className="big-header">We Empower Professional Women</div>
                    <div className="commitment-description">
                        Our goal is to support and guide you to be successful in all areas
                        of your life. Whether learning how to manage your daily work tasks
                        or taking a few moments to prioritize your health, we want to help you
                        achieve your ideal intentional lifestyle. We strive to empower all women
                        to stop settling and start taking control of their lives to become their
                        best selves.
                    </div>
                </div>

                <div className="commitment-img" >
                    <img src={items[1]._embedded['wp:featuredmedia']['0'].source_url}></img>
                </div>





            </div>

        );
    }
}

export default Our_Commitment;