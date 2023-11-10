import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../../GlobalRedux/Features/list/listSlice';
import Button from '../Form/Button/button';


const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    dispatch(addList(inputValue));
    setInputValue('');
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleAddClick}>Adicionar</Button>
    </div>
  );
};

export default Form;