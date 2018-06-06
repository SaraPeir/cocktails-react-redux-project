import axios from 'axios';
import store from '../index.js';

export const UPDATE_INFO = 'UPDATE_INFO';
export const CHANGE_SELECT_TEXT = 'CHANGE_SELECT_TEXT';

export function updateInfo() {
    return (dispatch, getState) => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then((response) => {
                const array1 = response.data.drinks;
                const array2 = array1.map( (d, index) => d.idDrink);
                let array = [];
                for (let i = 0; i < array2.length; i++) {
                    array.push(axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${array2[i]}`))
                }
            const array3 = [];
          axios.all(array).then(response => array3.push(response.map( (d, index) => d.data)));




          dispatch( { type: UPDATE_INFO, drinksArray: array1, drinksArray2: array2, drinksArray3: array3})
      })
    }
  }


  export function changeSelectText(event) {
      return (dispatch, getState) => {

        // function array(){console.log('hola', store.getState().selVal)};
        //  store.subscribe(array)
        //
        //  function array2(){console.log('array', store.getState().data)};
        //   store.subscribe(array2);
const selectValue = event.target.value;

          function filterArray(){
            return store.getState().data.drinksData3;
            };
           store.subscribe(filterArray);
const newArray = filterArray();

const drinkArray = newArray[0].map((x, index) => x.drinks).map((y, index) => y[0]).filter((z, index) => z.strDrink == selectValue);
console.log('drinkArray: ', drinkArray)


      //   array()
      // array2()
//filterArray();

                  dispatch( { type: CHANGE_SELECT_TEXT, text: selectValue, infoArray: drinkArray} )

      }
  }
