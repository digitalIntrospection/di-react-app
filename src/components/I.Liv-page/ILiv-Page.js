import React, { Component } from 'react';
import '../../App.css';
import ButtonComponent from '../Button-two';
import Footer from '../Footer/Footer';

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
            return <div>Loading...</div>;

        return (
            <div className="program-container">
                <div className="program-header"> <span className="pink">{this.pink_var}</span> is The all in one approach to improve Your personal wellbeing and productivity</div>
                <div className="program-description">Combining the power of Artificial Intelligence and Machine Learning with the wisdom of member community to generate insights and program content</div>
                <div className="phone-contaner">
                    <div className="phone-image"><img src={items[0]._embedded['wp:featuredmedia']['0'].source_url}></img></div>
                    <div className="text-container">
                        <div className="text-block">
                            <div className="img-one"><img src={items[4]._embedded['wp:featuredmedia']['0'].source_url}></img></div>

                            <div>
                                <div className="header-one">Habit 1</div>
                                <div className="text-one">Its important because - Facing increasing levels of burnout (42% of women report increased levels of burnout, vs 32% in 2020)</div>
                            </div>


                        </div>
                        <div className="text-block-two" >
                            <div className="img-one"><img src={items[4]._embedded['wp:featuredmedia']['0'].source_url}></img></div>

                            <div>
                                <div className="header-one">Habit 2</div>
                                <div className="text-one">Its important because - Facing increasing levels of burnout (42% of women report increased levels of burnout, vs 32% in 2020)</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sign-up-cta">
                    <div className="cta-one">Sounds Interesting?</div>
                    <div className="cta-two">Take control of your Life</div>
                    <ButtonComponent text="Sign Up"></ButtonComponent>


                </div>
                <Footer></Footer>
            </div >

            // </div>

        );
    }
}

export default I_Liv_Page;