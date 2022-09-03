import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button';


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
            <div className="content-container">
                <div className="description-one-container">

                    <div >
                        <img src={items[8]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                    </div>

                    <div className='content-one'>
                        <div className="description-header">
                            {items[8].title.rendered}                        </div>
                        <div className="description-para-one">
                            We offer a digital, app-based personal development and productivity program by leading members via a self-paced digital ‘playbook’ for Intentional Living, supporting them as adapt and adopt daily practices in only 5-15 mins/day. We help women set their rhythm in life, so that it becomes EASY to get the HARD things DONE.
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
                            <ButtonComponent text="I.Liv." />
                            <ButtonComponent text="Sign Up" />
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