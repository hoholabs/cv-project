import React from 'react';

function ExperienceCard(props) {
    return !props.card.editingCard || props.editingSection === false ? (
        <ul className="experience-card">
            <li></li>
            <li className="title">{props.card.title}</li>
            <li className="company">{props.card.company}</li>
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
            <li className="description">{props.card.description}</li>
        </ul>
    ) : (
        <form className="experience-card">
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
                placeholder="title"
                name="title"
                value={props.card.title}
                onChange={(event) => props.handleChange(event, props.card.id)}
            ></input>

            <input
                type="text"
                placeholder="company"
                name="company"
                value={props.card.company}
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
            <input
                className="description"
                type="textarea"
                placeholder="description"
                name="description"
                value={props.card.description}
                onChange={(event) => props.handleChange(event, props.card.id)}
            ></input>
        </form>
    );
}

export default ExperienceCard;
