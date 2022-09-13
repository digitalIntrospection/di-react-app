import React, { Component } from 'react';
import '../../App.css';


class Our_approach extends Component {
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
            return <div></div>;

        return (
            <div className="approach-container">
                <div className="commitment-img" >
                    <img src={items[2]._embedded['wp:featuredmedia']['0'].source_url}></img>
                </div>
                <div className="text-container">
                    <div className="small-header">Our Approach</div>
                    <div className="big-header">We Empower Professional Women</div>
                    <div className="commitment-description">
                        Based on 5 principle courses, Digital Introspection can help you learn and
                        integrate the key ingredients to a fulfilling, successful lifestyle. This
                        includes a personalized 12-week program using tools to help you set daily goals,
                        track your progress, incorporate fundamental habits, and rewire your brain to start
                        living intentionally. How can you start living your best life? We offer a user-friendly
                        app with all the tools you will need to embark on your journey towards self-improvement.
                        By committing just 5-15 minutes a day, taking control of your life has never been simpler!
                    </div>
                </div>







            </div>

        );
    }
}

export default Our_approach;