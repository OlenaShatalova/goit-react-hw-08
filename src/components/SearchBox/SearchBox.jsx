import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilterName } from '../../redux/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        placeholder="Harry"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
