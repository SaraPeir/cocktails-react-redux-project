import axios from 'axios'

export const UPDATE_INFO = 'UPDATE_INFO';

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
            const array3 = []
            axios.all(array).then(response => array3.push(response.map( (d, index) => d.data)));

          dispatch( { type: UPDATE_INFO, drinksArray: array1, drinksArray2: array2, drinksArray3: array3 })
      })
    }
  }

  //
  // export function updateInfo() {
  //     return (dispatch, getState) => {
  //         axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  //             .then((response) => {
  //                 const array1 = response.data.drinks;
  //                 const array2 = array1.map( (d, index) => d.idDrink);
  //
  //                 const array = array2.map((num, index) => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${num}`));
  //                 const array3 = (Promise.all(array))
  //
  //                .then(resp => Promise.resolve(resp))
  //                 .then(res => res.map((x, index) => x.data ))
  //                 .then(r => r.map((y, index) => y.drinks ))
  //                .then(re => re);
  //                //.then(re => console.log('re: ', re));
  //
  //                console.log('array3: ', array3);
  //
  //
  //           dispatch( { type: UPDATE_INFO, drinksArray: array1, drinksArray2: array2, drinksArray3: array3 })
  //       })
  //     }
  //   }
