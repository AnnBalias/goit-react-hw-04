import { IconContext } from 'react-icons';
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <header className={css.header}>
            <form className={css.headerForm}>
                <input
                    className={css.formInp}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.formBtn}>
                    <IconContext.Provider value={{size: "20px", color: "dimgray"}}>
                        <IoIosSearch />
                    </IconContext.Provider>
                </button>
            </form>
        </header>
    )
}

export default SearchBar;