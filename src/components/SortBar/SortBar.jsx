import { useDispatch } from 'react-redux';
import { changeSortType } from '../../redux/filtersSlice';
import css from './SortBar.module.css';

const SortBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p>Sort contacts</p>
      <select
        aria-label="select"
        className={css.select}
        name="sort"
        defaultValue="default"
        onChange={e => dispatch(changeSortType(e.target.value))}
      >
        <option value="default">Default</option>
        <option value="alphabetical"> &#8593; A - Z</option>
        <option value="reverse"> &#8595; Z - A</option>
      </select>
    </div>
  );
};

export default SortBar;
