

import React from "react";
import PropTypes from "prop-types";
import { OptionsContain, OptionsBtn } from "../FedbackOptions/FeedbackOptions.styled";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsContain>
    {options.map((option) => (
      <OptionsBtn
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </OptionsBtn>
    ))}
  </OptionsContain>
);
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};


// class FeedbackOptions extends Component {
//     state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     }
    
// onLeaveFeedback = (event) => {
//     const { name } = event.currentTarget;
//     this.setState((prevState) => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//     render() {
//         return (
//             <div>
//                 {this.props.options.map(({ option, onLeaveFeedback }) => (
//       <button
//         key={option}
//         type="button"
//         name={option}
//         onClick={onLeaveFeedback}
      
        
//       ></button>
//     ))}
//   </div>
// )

//     }
// }



