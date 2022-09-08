import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button-two';
import { Link } from 'react-router-dom'



class Main_Description extends Component {

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
            <div id='scroll' className="content-container">
                <div className="description-one-container">

                    <div >
                        <img src={items[8]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                    </div>

                    <div className='content-one'>
                        <div className="description-header">
                            {items[8].title.rendered}                        </div>
                        <div className="description-para-one">
                            Our app-based program can allow you to experience a new way of living.
                            We have compiled scientifically proven and experience-based wellness practices
                            into a simple, customizable online platform that you can access on the go. Our
                            goal is to create a space for you to practice intentional living to be the best
                            version of yourself - whatever that means to you!
                        </div>

                    </div>
                </div>

                <div className="description-two-container">

                    <div className='content-two'>
                        <div className="description-header">
                            {items[7].title.rendered}                        </div>
                        <div className="description-para-two">
                            We offer a digital, app-based personal development and productivity program by leading members via a self-paced digital ‘playbook’ for Intentional Living, supporting them as adapt and adopt daily practices in only 5-15 mins/day. We help women set their rhythm in life, so that it becomes EASY to get the HARD things DONE.
                        </div>
                        <div className="btn-formatting">
                            <Link className='btn-redirect' to='/I.Liv.'>\
                                <ButtonComponent text="I.Liv." />
                            </Link>
                            <Link className='btn-redirect' to='/Sign-Up'>\
                                <ButtonComponent text="Sign Up" />
                            </Link>
                        </div>
                    </div>

                    <div >
                        <img src={items[7]._embedded['wp:featuredmedia']['0'].source_url} className="description-two-img" />
                    </div>

                </div>
            </div>

        );
    }
}

export default Main_Description;