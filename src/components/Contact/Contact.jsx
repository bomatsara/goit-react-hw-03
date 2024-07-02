import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ contact, onDelete, searchQuery }) {
  const { id, name, number } = contact;

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ?
            (<span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>) :
            (part),
        )}
      </>
    );
  };

  return (
    <div className={css['card']}>
      <div className={css['card-wrap']}>
        <div className={css['card-info']}>
          <div className={css['card-item']}>
            <FaUser className={css['card-item-icon']} />
            <div className={css['card-item-text']}>{getHighlightedText(name, searchQuery)}</div>
          </div>

          <a href={`tel:${number}`} className={css['card-item']}>
            <FaPhone className={css['card-item-icon']} />
            <div className={css['card-item-text']}>{number}</div>
          </a>
        </div>

        <div className={css['card-action']}>
          <button className={css['delete']} onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}