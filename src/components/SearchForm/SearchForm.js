import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DivSearchForm = styled.div`
  display: flex;
  width: 275px;
  height: 290px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap:10px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

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

const SearchForm = () => {
  return (
    <form>
    <DivSearchForm>
        <span>Парамерты поиска</span>
        
          <input type='text' placeHolder = 'Название'/>
          <select >
                <option value="">Выберите категорию</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <div className = "tsena">
              <span style = {{fontSize: '16px', color:'rgba(0,0,0,0.9)'}}>Цена</span>
            </div>
            <div className = 'priceInputs'>
              
              <input className = 'lilInput' type='text' placeHolder = 'от'/>
              <input className = 'lilInput' type='text' placeHolder = 'до'/>
            </div>
            <select >
                <option value="">Выберите город</option>
                <option value="dog">Москва</option>
                <option value="cat">Санкт-Петербург</option>
                <option value="hamster">Воронеж</option>
                <option value="parrot">Севастополь</option>
                <option value="spider">Артемовск</option>
                <option value="goldfish">Казань</option>
            </select>
        
    </DivSearchForm>
    </form>
  );
};

export default SearchForm;