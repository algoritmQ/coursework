import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/api.js';
import { setCategories } from '../../store/reducers/categoriesReducer';

import './AdditionAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link, useParams } from 'react-router-dom';
import BtnGreyRect from '../../components/buttons/BtnGreyRect';
import Select from 'react-select';
import { setItem } from '../../store/reducers/itemReducer.js';


function ChangeAdPage(props) {
  const dispatch = useDispatch();
    const adsId = useParams().id;
    const { item } = useSelector(store => store.item);

    let arrCategories = []; 
    const { categories } = useSelector(store => store.categories);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [category, setCategory] = useState('');

    
    function appendCat(v, l){ 
      const cat = {value: v, label: l};
      arrCategories.push(cat);
    }
    categories.forEach(element => appendCat(element.id, element.title)); 
    
    async function updateItem() {
      const categoryId = arrCategories.findIndex(element => element.label === category) + 1;
      await axiosInstance.put(`ads/${adsId}/`, {
      'title': name,
      'category': categoryId,
      'price': price,
      'short_description': shortDescription,
      'full_description': fullDescription,
    })
    .then(response => console.log(response))
    .catch(error => console.error);
  }
  useEffect(() => {
    const fetchCategories = async () => {
      await axiosInstance.get('categories/')
      .then(response => {
        dispatch(setCategories(response.data));
      });
    }

    const fetchItemById = async (adId) => {
      await axiosInstance.get(`ads/${adId}/`)
        .then(response => {
          dispatch(setItem(response.data));
          setName(response.data.title);
          setPrice(response.data.price);
          setShortDescription(response.data.short_description);
          setFullDescription(response.data.full_description);
          // setCategory();
        })
        .catch(error => console.error(error));
    }

    fetchCategories();
    fetchItemById(adsId);
  }, [dispatch]);
  
  return (
      <div class = "additionAdPage">
        <form>
        <div className = "title">Редактирование объявления</div>
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
                  placeholder= "Категория"
                  options={arrCategories}
                  // value={category}
                  label={category}
                  onChange={e => setCategory(e.label)}   
                />
              </div>
              <div className = "oneField2">
                <input placeholder = "name" value={name} onChange={e => setName(e.target.value)}/>
              </div>
              <div className = "oneField2"><input placeholder = "price" value={price} onChange={e => setPrice(e.target.value)}/></div>
              <div className = "bigField2">
                <div className = "knopka">
                  <label for = "addImage">
                    <BtnGreyRect/>
                  </label>
                  <input
                    id = "addImage"
                    type ="file"
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
              <textarea value={shortDescription} onChange={e => setShortDescription(e.target.value)}></textarea>
            </div>
            <div className = "largeDescription">
              <span>Подробное описание</span>
              <textarea value={fullDescription} onChange={e => setFullDescription(e.target.value)}></textarea>     
              <div onClick={updateItem}><BtnBlue50Rect name = "Обновить объявление" widd = "210px"/></div>      
            </div>
            
          </div>
          
        </div>
        </form>
      </div>
    );
}

export default ChangeAdPage;