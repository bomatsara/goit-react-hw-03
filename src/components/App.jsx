import Section from './layout/Section/Section';
import {useEffect, useState} from 'react';
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import defaultContacts from '../data/contacts.json';
import ContactList from "./ContactList/ContactList.jsx";

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem('contacts');

        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }

        return defaultContacts;
    });

    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    };

    const deleteContact = (contactId) => {
        setContacts((prevContact) => {
            return prevContact.filter((contact) => contact.id !== contactId);
        });
    };

    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <Section className="section-form">
                <h1 style={{
                    fontSize: 40,
                    marginBottom: 30
                }}>Phonebook</h1>
                <ContactForm onAdd={addContact}/>
                <SearchBox value={filter} onFilter={setFilter}/>
                <ContactList contacts={visibleContacts} onDelete={deleteContact} searchQuery={filter} />
            </Section>
        </>
    );
}