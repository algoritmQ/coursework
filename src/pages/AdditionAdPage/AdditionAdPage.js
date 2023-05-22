import './AdditionAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link } from 'react-router-dom';
import BtnGreyRect from '../../components/buttons/BtnGreyRect';
import Select from 'react-select';

const selectableOptions = [
  { value: 'Москва', label: 'Москва' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Воронеж', label: 'Воронеж' },
  { value: 'Вологда', label: 'Вологда' }
]

function AdditionAdPage(props) {
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
            {/* <select id="pet-select">
                <option value="">Выберите категорию</option>
                <option value="dog">Dog</option>               
            </select> */}
              <Select id = "my-select"
                className="input-cont"
                placeholder= "Категория"
                options={selectableOptions}
              />
            </div>
            <div className = "oneField2">
              <input/>
            </div>
            <div className = "oneField2"><input/></div>
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
            <textarea></textarea>
          </div>
          <div className = "largeDescription">
            <span>Подробное описание</span>
            <textarea></textarea>     
            <div><BtnBlue50Rect name = "Добавить объявление" widd = "210px"/></div>      
          </div>
          
        </div>
        
      </div>
      </form>
    </div>
  );
}

export default AdditionAdPage;