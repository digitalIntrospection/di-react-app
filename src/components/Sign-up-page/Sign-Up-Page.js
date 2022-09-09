import React, { Component } from 'react';
import '../../App.css';
// import ButtonComponent from '../Button-two';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';


class Sign_Up_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
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
            <div className="sign-up-page-container">
                <Navbar />

                <div className="sign-up-container">
                    <div className="wrapper">


                        <div className="input-div  info-wrapper">

                            <div className="input-header">We’ll Help You Achieve Your Goals</div>
                            <div className='contact-wrapper'>
                                <p>Contact us at</p>
                                <p>
                                    info@digitalintrospection.io
                                </p>
                            </div>
                            {/* <div className="input-boxes">
                                <form className="input-boxes" onSubmit={this.handleSubmit}>
                                    <label> */}
                            {/* Name: */}

                            {/* <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                        <label> */}
                            {/* Name: */}
                            {/* <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <label> */}
                            {/* Name: */}
                            {/* <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div> */}
                            {/* <ButtonComponent text="Sign Up"></ButtonComponent> */}
                        </div>
                        <div className="input-div-img">
                            <img src={items[0]._embedded['wp:featuredmedia']['0'].source_url}></img>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div >

        );
    }
}

export default Sign_Up_Page;