import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

const DivSearchForm = styled.div`
  display: flex;
  width: 275px;
  height: 290px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap:10px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  select{
    height:30px;
    width:206px;
  }
  #regSelect{
    height:30px;
    width:206px;
    font-size:15px;
  }
  span{
    font-size:20px;
  }
  input{
    height:35px;
    width:206px;
  }
  select{
    height:35px;
    width:206px;
    border-radius:4px;
    border:0.3px solid silver;
  }
  .priceInputs{
    width:206px;
    height:40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  .lilInput{
    width:90px;
    height:35px;

  }
  .tsena{
    display:flex;
    width:205px;
    height:20px;
  }
`;

const selectableCities = [
  { value: '1', label: 'Москва' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Воронеж', label: 'Воронеж' },
  { value: 'Вологда', label: 'Вологда' }
]



const SearchForm = () => {
  return (
    <form>
    <DivSearchForm>
        <span>Парамерты поиска</span>
        
          <input type='text' placeHolder = 'Название'/>
          <Select
            id="regSelect"
            placeholder= "Категория"
            options={selectableCities}
          />
            <div className = "tsena">
              <span style = {{fontSize: '16px', color:'rgba(0,0,0,0.9)'}}>Цена</span>
            </div>
            <div className = 'priceInputs'>
              
              <input className = 'lilInput' type='text' placeHolder = 'от'/>
              <input className = 'lilInput' type='text' placeHolder = 'до'/>
            </div>
            <input type='text' placeHolder = 'Город'/>
        
    </DivSearchForm>
    </form>
  );
};

export default SearchForm;