import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/api.js';
import { setCategories } from '../../store/reducers/categoriesReducer.js';

import './AdditionAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect.js';
import BtnRedRect from '../../components/buttons/BtnRedRect.js';
import { Link } from 'react-router-dom';
import BtnGreyRect from '../../components/buttons/BtnGreyRect.js';
import Select from 'react-select';


function ChangeAdPage(...props) {
    let arrCategories = []; 
    const dispatch = useDispatch();
    const { categories } = useSelector(store => store.categories);

    useEffect(() => {
      const fetchCategories = async () => {
        //const arrCategories = [];
        await axiosInstance.get('categories/')
        .then(response => {
          dispatch(setCategories(response.data));
        });
      }
      fetchCategories();
      //console.log(categories);   
       
  }, [dispatch]);
  function appendCat(v, l){
    const cat = {value: v, label: l};
    arrCategories.push(cat);
  }
  categories.forEach(element => appendCat(element.id, element.title)); 
  function createItem() {
    console.log('товар добавлен');
  }

    return (
      <div class = "additionAdPage">
        <form>
        <div className = "title">Добавление нового объявления</div>
        <div className = "addField">
          <div className = "topBar">
            <div className = "names">
              <div className = "oneField">Категория</div>
              <div className = "oneField">Название</div>
              <div className = "oneField">Цена</div>
              <div className = "bigField">Фотографии</div>
            </div>
            <div className = "fields">
              <div className = "oneField2">
                <Select id = "my-select"
                  className="input-cont"
                  placeholder= {props.category}
                  options={arrCategories}
                />
              </div>
              <div className = "oneField2">
                <input placeholder = {props.title}/>
              </div>
              <div className = "oneField2"><input placeholder = {props.price}/></div>
              <div className = "bigField2">
                <div className = "knopka">
                  <label for = "addImage">
                    <BtnGreyRect/>
                  </label>
                  <input 
                    id = "addImage"
                    type="file"
                    name = "addImage"  
                  />
                  
                </div>
                <div className = "fieldPhotos">
                  <div className = "onePhoto"></div>
                  
                </div>

              </div>
            </div>
          </div>
          <div className = "textAreas">
            <div className = "shortDescription">
              <span>Краткое описание</span>
              <textarea>{props.short_description}</textarea>
            </div>
            <div className = "largeDescription">
              <span>Подробное описание</span>
              <textarea>{props.full_description}</textarea>     
              <div onClick={createItem}><BtnBlue50Rect name = "Добавить объявление" widd = "210px"/></div>  
              <div className = "deleteBtn" ><BtnRedRect name = "Удалить объявление" widd = "200px" size = "20px"/></div>
            </div>
            
          </div>
          
        </div>
        </form>
      </div>
    );
}

export default ChangeAdPage;