import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Pregunta from './Pregunta';
import Contador from './Contador';
import OpcionesRespuesta from './OpcionesRespuesta';

function Quiz(props) {
    function renderOpcionesRespuesta(key) {
        return (
            <OpcionesRespuesta
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <CSSTransition
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div key={props.questionId}>
                <Contador counter={props.questionId} total={props.questionTotal} />
                <Pregunta content={props.question} />
                <ul className="answerOptions">
                    {props.OpcionesRespuesta.map(renderOpcionesRespuesta)}
                </ul>
            </div>
        </CSSTransition>
    );
}

Quiz.propTypes = {
    Pregunta: PropTypes.string.isRequired,
    OpcionesRespuesta: PropTypes.array.isRequired,
    Pregunta: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;