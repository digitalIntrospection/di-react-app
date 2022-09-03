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
            return <div>Loading...</div>;

        return (
            <div className="approach-container">
                <div className="commitment-img" >
                    <img src={items[2]._embedded['wp:featuredmedia']['0'].source_url}></img>
                </div>
                <div className="text-container">
                    <div className="small-header">Our Approach</div>
                    <div className="big-header">We Empower Professional Women</div>
                    <div className="commitment-description">In today’s challenging times, living a fulfilled and balanced life can feel impossible, especially for women juggling many priorities in their personal/work life. At Digital Introspection (DI), we empower professional women to live with intention without sacrificing their personal, work or economic wellbeing.
                    </div>
                </div>







            </div>

        );
    }
}

export default Our_approach;