import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button-two';
// import renderHTML from 'react-render-html';



// import '../images/hero-image.png';
// import 'hero-image' from './images/hero-image.png'''

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
        const { onPaste } = props


    }
    componentDidMount() {

        fetch('http://digital-introspection.local/wp-json/wp/v2/pages?_embed', { mode: 'cors' })
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
            <div className="hero-container">

                <div className="hero-homepage">
                    <div className="hero-left">
                        <div align="left" >

                            <div className="hero-header">{items[3].title.rendered}</div>
                        </div>
                        <div align="left" className="hero-description">
                            <p>
                                We empower professional women to live with intention without sacrificing
                                their personal, work or economic wellbeing.
                            </p>
                            {/* <p>{renderHTML(items[3].content.rendered)})</p> */}

                        </div>

                        <div className="btn-formatting">
                            <ButtonComponent text="Learn More" />
                            <ButtonComponent text="Sign Up" />
                        </div>
                    </div>

                    <div align="right">
                        <img align="right" src={items[3]._embedded['wp:featuredmedia']['0'].source_url} className="Featured-image" />
                    </div>

                </div>
                <div className="round-button">^</div>
            </div>

        );
    }
}

export default Hero;