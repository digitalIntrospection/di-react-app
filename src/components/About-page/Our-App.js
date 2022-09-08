import React, { Component } from 'react';
import '../../App.css';


class Our_App extends Component {
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
                    <div className="small-header">Our App</div>
                    <div className="big-header">We Empower Professional Women</div>
                    <div className="commitment-description">
                        Designed for optimal daily use, our app provides an easy method of setting and
                        tracking your goals on the go. We understand how challenging it can be to find
                        time for your priorities. This is why we offer a simple digital platform to help
                        you feel accomplished – whatever that means for you!
                    </div>
                    <div className="our-app-cta">
                        <p>See More On Our app</p>
                    </div>
                </div>

                <div className="commitment-img" >
                    <img src={items[3]._embedded['wp:featuredmedia']['0'].source_url}></img>
                </div>






            </div>

        );
    }
}

export default Our_App;