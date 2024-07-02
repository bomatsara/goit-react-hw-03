import css from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";

export default function ContactList( { contacts, onDelete, searchQuery } ) {
    return (
        <div className={css['contact-list']}>
            {contacts.map((contact => (
                <div key={contact.id} className={css['contact-list-item']}>
                    <Contact contact={contact} onDelete={onDelete} searchQuery={searchQuery} />
                </div>
            )))}
        </div>
    )
}