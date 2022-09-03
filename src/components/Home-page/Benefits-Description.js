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
            <div className='benfits-container'>


                <div className="benefits-header">Reap long term benefits</div>
                <div className="three-divs">
                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[6]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[6].title.rendered}</div>
                            </div>
                            <div className="benefit-description">In today’s challenging times, living a fulfilled and balanced life can feel impossible, especially for women juggling many priorities in their personal/work life.</div>
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[5]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[5].title.rendered}</div>
                            </div>
                            <div className="benefit-description">In today’s challenging times, living a fulfilled and balanced life can feel impossible, especially for women juggling many priorities in their personal/work life.</div>
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="benefit-img">
                            <img src={items[4]._embedded['wp:featuredmedia']['0'].source_url} className="description-one-img" />
                            <div className="benefit-one">
                                <div className="">{items[4].title.rendered}</div>
                            </div>
                            <div className="benefit-description">In today’s challenging times, living a fulfilled and balanced life can feel impossible, especially for women juggling many priorities in their personal/work life.</div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Benefits_Description;