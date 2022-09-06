import React, { Component } from 'react';
import '../../App.css';


class Our_Team extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="our-team-container">
                <div className="team-header">Our Team</div>
                <div className="team-container">

                    {/* <div className='wrapper-one'> */}
                    <div className="person-container">
                        <div className="person-img"></div>
                        <div className="person-name">Mickey Chan</div>
                    </div>
                    <div className="person-container">
                        <div className="person-img"></div>
                        <div className="person-name">Kamil Khan</div>
                    </div>
                    {/* </div> */}
                    {/* <div className='wrapper-two'> */}

                    <div className="person-container">
                        <div className="person-img"></div>
                        <div className="person-name">Idana, CPO</div>
                    </div>
                    <div className="person-container">
                        <div className="person-img"></div>
                        <div className="person-name">Pooh Shiesty</div>
                    </div>
                    {/* </div> */}

                </div>

            </div>

        );
    }
}

export default Our_Team;