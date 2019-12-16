import React, { Component } from "react";
import "./Avatar.css";
import Avtarlist from "./Avtarlist";

class Avtar extends Component {
  state = {};

  render() {
    const arrayList = [
      { name: "abhilash", work: "dev" },
      { name: "abhishek", work: "testing" },
      { name: "any", work: "HR" },
      { name: "Mr. Raj", work: "Team Laed" }
    ];

    const arrarCard = arrayList.map((ar, i) => {
      return <Avtarlist key={i} listobj={ar} nav={this.props.onChange} />;
    });

    return arrarCard;
  }
}

export default Avtar;

// const Avtar = () => {
//   const arrayList = [
//     { name: "abhilash", work: "dev" },
//     { name: "abhishek", work: "testing" },
//     { name: "any", work: "HR" },
//     { name: "Mr. Raj", work: "Team Laed" }
//   ];

//   const arrarCard = arrayList.map((ar, i) => {
//     return (
//       <>
//         <div className="avatar" key={i}>
//           <img src={`https://joeschmoe.io/api/v1/${ar.name}`} alt="Avtar" />
//           <h1>{ar.name}</h1>
//           <p>{ar.work}</p>
//           <button
//             type="button"
//             class="tc btn btn-secondary"
//             onClick={NavChange(ar.name)}
//           >
//             click to subscribe
//           </button>
//         </div>
//       </>
//     );
//   });

//   return arrarCard;
// };

// export default Avtar;
