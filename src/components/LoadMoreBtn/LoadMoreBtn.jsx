import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ handClick }) => {
    return (
        <button className={css.moreBtn} onClick={handClick}>
            Load more
        </button>
    )
}

export default LoadMoreBtn;