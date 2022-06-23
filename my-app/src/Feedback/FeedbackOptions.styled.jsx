import React from "react";




const FeedbackOptions = ({ options }) => (
    <div>
        {options.map((option) => (
            <button>
                key={option}
                type="button"
                name={option}
            </button>
        ))}
    </div>
)

export default FeedbackOptions;