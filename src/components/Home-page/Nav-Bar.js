import React, { Component } from 'react';
import '../../App.css';




class Nav_Bar extends Component {
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
            <div>
                {/* <Nav>
                    <Navlink>
 {items[4].title.rendered}
                    {items[2].title.rendered}
                    {items[1].title.rendered}
                    {items[0].title.rendered}
                    </Navlink>
                </Nav> */}

            </div>
        );
    }
}

export default Nav_Bar;
