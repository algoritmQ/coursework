import './AdditionAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link } from 'react-router-dom';
import BtnGreyRect from '../../components/buttons/BtnGreyRect';


function AdditionAdPage(props) {
  return (
    <div class = "additionAdPage">
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
            <select id="pet-select">
                <option value="">Выберите категорию</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            </div>
            <div className = "oneField2"><input/></div>
            <div className = "oneField2"><input/></div>
            <div className = "bigField2">
              <div className = "knopka">
                <BtnGreyRect/>
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
    </div>
  );
}

export default AdditionAdPage;