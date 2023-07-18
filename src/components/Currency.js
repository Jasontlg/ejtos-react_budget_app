import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }

  return (

    <div className='currency--container'>
      <div className='form-inline' >

        <label>Currency</label> {
          (<select 
          name="Currency" 
          id="Currency"
          className="currency--select"
          onChange={event => changeCurency(event.target.value)}>
            <option className="currency--option" value="$" >$ Dollar</option>
            <option className="currency--option" value="£" >£ Pound</option>
            <option className="currency--option" value="€" >€ Euro</option>
            <option className="currency--option" value="₹" >₹ Rupee</option>
          </select>)
        }
      </div>
    </div >
  )
}

export default Currency;