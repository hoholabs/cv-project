import React from 'react';

function EducationCard(props) {
    return !props.card.editingCard || props.editingSection === false ? (
        <ul className="education-card">
            <li></li>
            <li className="school">{props.card.school}</li>
            <li className="program">{props.card.program}</li>
            <li className="dates">{props.card.dates}</li>
            {props.editingSection && (
                <button
                    onClick={() => {
                        props.toggleEdit(props.card.id);
                    }}
                    className="material-icon edit-btn"
                >
                    edit
                </button>
            )}
        </ul>
    ) : (
        <form className="education-card">
            <button
                className="material-icon"
                onClick={(event) => {
                    props.removeCard(event, props.card.id);
                }}
                style={{ backgroundColor: 'red' }}
            >
                delete
            </button>
            <input
                type="text"
                placeholder="school"
                name="school"
                value={props.card.school}
                onChange={(event) => props.handleChange(event, props.card.id)}
            ></input>

            <input
                type="text"
                placeholder="program"
                name="program"
                value={props.card.program}
                onChange={(event) => props.handleChange(event, props.card.id)}
            ></input>

            <input
                type="text"
                placeholder="dates"
                name="dates"
                value={props.card.dates}
                onChange={(event) => props.handleChange(event, props.card.id)}
            ></input>

            <button
                className="material-icon edit-btn"
                onClick={() => {
                    props.toggleEdit(props.card.id);
                }}
            >
                check
            </button>
        </form>
    );
}

export default EducationCard;
