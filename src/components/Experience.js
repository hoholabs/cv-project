import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';

const initialExperience = {
    title: '',
    company: '',
    dates: '',
    description: '',
    editingCard: true,
    id: new Date().getTime()
};

function Experience(props) {
    const [cards, setCards] = useState([initialExperience]);
    const [editingSection, setEditingSection] = useState(true);
    const [buttonLabel, setButtonLabel] = useState('check');

    const editSection = () => {
        if (editingSection === true) {
            setEditingSection(false);
        } else {
            setEditingSection(true);
        }

        if (buttonLabel === 'check') {
            setButtonLabel('edit');
        } else {
            setButtonLabel('check');
        }
    };

    const handleChange = (event, id) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let newCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card, [name]: value };
            } else {
                return card;
            }
        });

        setCards(newCards);
    };

    const addCard = () => {
        let newCard = { ...initialExperience, id: new Date().getTime() };
        setCards([...cards, newCard]);
    };

    const toggleEdit = (id) => {
        const newCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card, editingCard: !card.editingCard };
            } else {
                return card;
            }
        });

        setCards(newCards);
    };

    const removeCard = (event, id) => {
        event.preventDefault();
        const newCards = cards;

        let index = newCards.findIndex((card) => {
            if (card.id === id) {
                return true;
            } else {
                return false;
            }
        });

        newCards.slice(index, 1);

        setCards(newCards);
    };

    return (
        <section id="experience">
            <h1>Experience</h1>
            <button className="material-icon edit-btn" onClick={editSection}>
                {buttonLabel}
            </button>
            {cards.map((eachCard) => {
                return (
                    <ExperienceCard
                        card={eachCard}
                        key={eachCard.id}
                        editingSection={editingSection}
                        handleChange={handleChange}
                        toggleEdit={toggleEdit}
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

export default Experience;
