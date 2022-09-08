import React, { Component } from 'react';
import '../../App.css';


class Benefits_Description extends Component {
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
            <div className='benefits-container'>

                <div className="benefits-header">Reap long term benefits</div>
                <div className="three-divs">
                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[6]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[6].title.rendered}</div>
                            </div>
                            <div className="benefit-description">
                                As a woman juggling the many aspects of life, it can become impossible to consider
                                your mental well-being. We understand this struggle and want to teach you how to
                                properly care for your mind through our guided mindset training program
                            </div>
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[5]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[5].title.rendered}</div>
                            </div>
                            <div className="benefit-description">
                                Taking care of your body may seem like an obvious priority. However, as a woman,
                                it can often be challenging to find the time to take care of your physical health.
                                We will provide the support you need to incorporate these essential habits into your busy
                                schedule in a realistic and manageable way.
                            </div>
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[4]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[4].title.rendered}</div>
                            </div>
                            <div className="benefit-description">
                                Our guided program and mindset training provides you with all the tools you will need
                                to set yourself up for success. We will help you integrate wellness practices into your
                                daily routine so that your lifestyle becomes one that allows you to thrive both personally
                                and professionally!
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Benefits_Description;