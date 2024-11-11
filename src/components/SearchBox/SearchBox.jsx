import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilterName } from '../../redux/filters/selectors.js';
import { IoMdClose } from 'react-icons/io';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  return (
    <label className={css.label}>
      Find contacts
      <input
        className={css.input}
        type="text"
        value={filter}
        placeholder="Harry / 888-88-88"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
      <IoMdClose
        onClick={() => dispatch(changeFilter(''))}
        className={css.icon}
      />
    </label>
  );
};

export default SearchBox;
