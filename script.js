fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  });

  // let data = response.data;



  let data = [
          {
            "image": "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
            "name": "Ніжна свіжість",
            "flovers": "троянди та лілії",
            "price": 445
          },
          {
            "image": "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
            "name": "Сорбет",
            "flovers": "хризантеми та троянди",
            "price": 450
          },
          {
            "image": "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
            "name": "Yellow song",
            "flovers": "соняшники та солідаго",
            "price": 455
          },
          {
            "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
            "name": "Персиковий нектар",
            "flovers": "лілії та троянди",
            "price": 455
          },
          {
            "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
            "name": "Аврора",
            "flovers": "лілії та троянди",
            "price": 460
          },
          {
            "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
            "name": "Класика кохання",
            "flovers": "червоні троянди",
            "price": 465
          }
        ]

        console.log(data)

let target = document.querySelector('#target');

data = data;

data.forEach((val, key) => {  
target.innerHTML += `<div class="image-list"><img src ="${val.image}" class="image-styles" /><p class="image-title">${val.name}</p><p class="image-title">${val.flovers}</p><p class="image-title">${val.flovers}</p></div>`;
});