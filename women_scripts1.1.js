var menimgs = [
  {
    caption: 'Short Sleeve Crop Top',
    alt: 'A1-01',
    src: 'images/women-ts1.jpg',
    text: 'Available size: S M',
    text1: 'Color:White/Grey/Black/Pink',
    text2:  'Price:$15.00 CAD'
  },
  {
    caption: 'Short Sleeve T-shirt',
    alt: 'A1-02',
    src: 'images/women-ts13.jpg',
    text: 'Available size: S M',
    text1: 'Color:White/Black/Red/Yellow/Green',
    text2:  'Price:$15.00 CAD'
  },
  {
    caption: 'Road Trip T-shirt',
    alt: 'A1-03',
    src: 'images/women-ts14.jpg',
    text: 'Available size: S M L',
    text1: 'Color:White',
    text2:  'Price:$25.00 CAD'
  },
  {
    caption: 'Kansas City T-shirt',
    alt: 'A1-04',
    src: 'images/women-ts4.jpg',
    text: 'Available size: M L',
    text1: 'Color:White',
    text2:  'Price:$25.00 CAD'
  },
  {
    caption: 'Chihuahua T-shirt',
    alt: 'A1-01',
    src: 'images/women-ts10.jpg',
    text: 'Available size: M L XL',
    text1: 'Color:White',
    text2:  'Price:$18.00 CAD'
  },
  {
    caption: 'Vintage Evil T-shirt',
    alt: 'A1-02',
    src: 'images/women-ts8.jpg',
    text: 'Available size: L XL XX',
    text1: 'Color:Sand/Grey/Black',
    text2:  'Price:$35.00 CAD'
  },
  {
    caption: 'Disney T-shirt',
    alt: 'A1-03',
    src: 'images/women-ts2.jpg',
    text: 'Available size: L XL XX ',
    text1: 'Color:White/Grey/Black/Steel Green',
    text2:  'Price:$35.00 CAD'
  },
  {
    caption: 'Dragon T-shirt',
    alt: 'A1-04',
    src: 'images/women-ts11.jpg',
    text: 'Available size: XS S ',
    text1: 'Color:Grey/Black',
    text2:  'Price:$35.00 CAD'
  }
];

window.onload = function() {
  loadImgWomen();
};

function loadImgWomen() {
  var x = document.querySelector('.outputimgwomen'); //. is a class
  //load img from 1 to last element in the array, make a loop, the first if
  // statement will wrap 4 images into the same div. The else will just wrap
  // each image in a div.
  for (var i = 0; i < menimgs.length; i++) {
    if (i % 4 === 0 || i === 0) {
       //when i== 0/4/12/16/etc it wrap 3 pictures into the same line
      var div1 = document.createElement('div');
      div1.className = 'imgcontainer';
      x.appendChild(div1);

      var div2 = document.createElement('div');
      div2.className = 'imgs';
      div1.appendChild(div2);

      var img = document.createElement('img');
      img.setAttribute('src', menimgs[i].src);
      img.setAttribute('alt', menimgs[i].alt);

      div2.appendChild(img);

      var des = document.createElement('div');
      des.className = 'pictext';
      div2.appendChild(des);

      var h3 = document.createElement('h3');
      h3.textContent = menimgs[i].caption;
      des.appendChild(h3);

      var p = document.createElement('p');
      p.textContent = menimgs[i].text;
      des.appendChild(p);

      var p1 = document.createElement('p');
      p1.textContent = menimgs[i].text1;
      des.appendChild(p1);

      var p2 = document.createElement('p');
      p2.textContent = menimgs[i].text2;
      des.appendChild(p2);
      
      var button = document.createElement("BUTTON");
      var textin = document.createTextNode("Add to cart");
      button.appendChild(textin); 
      des.appendChild(button);

    } else {
       div2 = document.createElement('div');
      div2.className = 'imgs';
      div1.appendChild(div2);

       img = document.createElement('img');
      img.setAttribute('src', menimgs[i].src);
      img.setAttribute('alt', menimgs[i].alt);

      div2.appendChild(img);

       des = document.createElement('div');
      des.className = 'pictext';
      div2.appendChild(des);

       h3 = document.createElement('h3');
      h3.textContent = menimgs[i].caption;
      des.appendChild(h3);

       p = document.createElement('p');
      p.textContent = menimgs[i].text;
      des.appendChild(p);

       p1 = document.createElement('p');
      p1.textContent = menimgs[i].text1;
      des.appendChild(p1);

       p2 = document.createElement('p');
      p2.textContent = menimgs[i].text2;
      des.appendChild(p2);

       button = document.createElement("BUTTON");
       textin = document.createTextNode("Add to cart");
      button.appendChild(textin); 
      des.appendChild(button);
      
    }
  }
}
