import React from 'react';
import Proptypes from 'prop-types';


function Question(props) {
    return (
        <h2 className="question">{props.content}</h2>
    );
}

Question.prototype = {
    content: Proptypes.string.isRequired
};

export default Question;