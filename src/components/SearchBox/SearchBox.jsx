import {useId} from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
    const fieldIds = {
        search: useId(),
    }

    return (
        <div className={css['search-box']}>
            <div className={css['form-row']}>
                <label htmlFor={fieldIds.search} className={css['form-label']}>Find contacts by name</label>
                <input
                    className={css['form-input']}
                    type="text" name="search"
                    id={fieldIds.search}
                    value={value}
                    onChange={(e) => onFilter(e.target.value)}
                />
            </div>
        </div>
    )
}