import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button-two';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import { motion } from 'framer-motion';


class I_Liv_Page extends Component {
    constructor(props) {
        super(props);
        this.pink_var = "I.Liv.";
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
            <motion.div className="program-container"
                initial={{ opacity: 0, transition: { duration: 0.1 } }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <Navbar />

                <div className="program-header"> <span className="pink">{this.pink_var}</span> is The all in one approach to improve Your personal wellbeing and productivity</div>
                <div className="program-description">Combining the power of Artificial Intelligence and Machine Learning with the wisdom of member community to generate insights and program content</div>
                <div className="phone-contaner">
                    <div ><img className="phone-image" src={items[0]._embedded['wp:featuredmedia']['0'].source_url}></img></div>
                    <div className="text-container">
                        <div className="text-block">
                            <div className="img-one"><img src={items[4]._embedded['wp:featuredmedia']['0'].source_url}></img></div>

                            <div>
                                <div className="header-one">Mind Habits</div>
                                <div className="text-one">
                                    As women, we understand how hard it can be to prioritize our
                                    mental well-being. Taking proper care of your mind is integral
                                    to intentional living. And it is one of the primary skills you
                                    will take away from our program!

                                </div>
                            </div>


                        </div>
                        <div className="text-block-two" >
                            <div className="img-one"><img src={items[5]._embedded['wp:featuredmedia']['0'].source_url}></img></div>

                            <div>
                                <div className="header-one">Body Habits</div>
                                <div className="text-one">
                                    Including practices to support a healthy body are essential to a well-rounded lifestyle.
                                    We will provide you with all the necessary tools and skills to do so. That way, you can
                                    start your journey towards achieving the most fulfilling version of your life!
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sign-up-cta">
                    <div className="cta-one">Sounds Interesting?</div>
                    <div className="cta-two">Take control of your Life</div>

                    <Link className='btn-redirect' to='/Sign-Up'>
                        <ButtonComponent text="Sign Up"></ButtonComponent>
                    </Link>


                </div>
                <Footer></Footer>
            </motion.div >

            // </div>

        );
    }
}

export default I_Liv_Page;