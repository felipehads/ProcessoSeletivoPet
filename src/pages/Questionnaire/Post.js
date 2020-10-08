import axios from 'axios';

const postCancer = (v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11) => {
    return axios({
        method: 'post',
        url: 'https://bcrisktool.cancer.gov/calculate',
        data: JSON.stringify({
            'cancerAndRadiationHistory': v1,
            'geneticMakeup': v2,
            'age': v3,
            'race': v4,
            'sub_race': v5, 
            'biopsy': v6,
            'biopsy_result': v7,
            'biopsy_ah': v8,
            'age_period': v9,
            'childbirth_age': v10,
            'relatives': v11
        })
    })
      .then((response) => {
          console.log(response);
        })
      .catch((error) => {
        console.error(error);
      })
}