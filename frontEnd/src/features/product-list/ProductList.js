import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from './productListSlice';
export default function ProudList() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      
       
    </div>
  );
}
