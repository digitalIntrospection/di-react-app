import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button-two';
// import renderHTML from 'react-render-html';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import ScrollTo from "react-scroll-into-view";
import { Link } from 'react-router-dom'


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

                            <Link className='btn-redirect' to='/About'>
                                <ButtonComponent text="Learn More" />
                            </Link>

                            <Link className='btn-redirect' to='/Sign-Up'>
                                <ButtonComponent text="Sign Up" />
                            </Link>
                        </div>
                    </div>

                    <div align="right">
                        <img align="right" src={items[3]._embedded['wp:featuredmedia']['0'].source_url} className="Featured-image" />
                    </div>

                </div>
                <ScrollTo selector={`#scroll`} smooth={`#smooth`}>
                    <IconContext.Provider value={{ className: "round-button" }}>
                        <div>
                            <BsArrowDownCircleFill />
                        </div>
                    </IconContext.Provider>
                </ScrollTo>
            </div>

        );
    }
}

export default Hero;