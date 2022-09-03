import React, { Component } from 'react';

// class GetData extends Component {
//     constructor(props) {
//       super(props);
//     }

//     render() {
//       return (
//         <div>
//           <h1>{this.props.title}</h1>
//         </div>
//       );
//     }
//   }


async function GetData() {
    const response = await fetch('http://digital-introspection.local/wp-json/wp/v2/pages', { mode: 'cors' });
    const data = await response.json();
    // console.log(data);
    // const title = data[0].title.rendered;
    // const content = data[0].content.rendered;

    // console.log(data[1].title.rendered);
    // console.log(data[1].content.rendered);
    return data
}

export default GetData;
