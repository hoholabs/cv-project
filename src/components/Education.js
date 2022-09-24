import React, { useState } from 'react';
import EducationCard from './EducationCard';

const initialEducation = {
    school: '',
    program: '',
    dates: '',
    id: new Date().getTime(),
    editingCard: true
};

function Education(props) {
    const [cards, setCards] = useState([initialEducation]);
    const [editingSection, setEditingSection] = useState(true);
    const [buttonLabel, setButtonLabel] = useState('check');

    const editSection = () => {
        if (editingSection) {
            setEditingSection(false);
        } else {
            setEditingSection(true);
        }

        if (buttonLabel === 'edit') {
            setButtonLabel('check');
        } else {
            setButtonLabel('edit');
        }
    };

    const toggleEdit = (event, id) => {
        event.preventDefault();

        const newCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card, editingCard: !card.editingCard };
            } else {
                return card;
            }
        });

        setCards(newCards);
    };

    const handleChange = (event, id) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const newCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card, [name]: value };
            } else {
                return card;
            }
        });

        setCards(newCards);
    };

    const removeCard = (event, id) => {
        event.preventDefault();

        const index = cards.findIndex((card) => card.id === id);
        let newCards = cards;
        newCards.splice(index, 1);
        setCards([...newCards]);
    };

    const addCard = () => {
        let newCard = { ...initialEducation, id: new Date().getTime() };
        setCards([...cards, newCard]);
    };

    return (
        <section id="education">
            <h1>Education</h1>
            <button className="material-icon edit-btn" onClick={editSection}>
                {buttonLabel}
            </button>
            {cards.map((eachCard) => {
                return (
                    <EducationCard
                        card={eachCard}
                        key={eachCard.id}
                        editingSection={editingSection}
                        toggleEdit={toggleEdit}
                        handleChange={handleChange}
                        removeCard={removeCard}
                    />
                );
            })}
            {editingSection && (
                <button className="material-icon edit-btn" onClick={addCard}>
                    add_circle
                </button>
            )}
        </section>
    );
}

export default Education;
