var menimgs = [
    {
        caption: 'Nike x OffWhite',
        alt: 'B1-01',
        src: 'images/ni4.jpg',
        text: 'Available size 42 43 44 45 ',
        text1:'Color: Orange/Green',
        text2: 'Price: $1000 CAD'
    },
    {
        caption: 'Nike Malt',
        alt: 'B1-01',
        src: 'images/ni5.jpg',
        text: 'Available size 40 41 42',
        text1:'Color Yellow',
        text2: 'Price: $350 CAD'
    },
    {
        caption: 'Nike x Offwhite',
        alt: 'B1-01',
        src: 'images/ni6.jpg',
        text: 'Available size 43 44 45 46',
        text1:'Color: Tan/ Denim',
        text2: 'Price: $2500 CAD'
    },
    {
        caption: 'Nike color',
        alt: 'B1-01',
        src: 'images/ni7.jpg',
        text: 'Available size 43 44 ',
        text1:'Color Black/grey',
        text2: 'Price: $560 CAD'
    },
    {
        caption: 'Nike Air Force High',
        alt: 'B1-01',
        src: 'images/ni2.jpg',
        text: 'Available size 44 45',
        text1:'Color Black/grey',
        text2: 'Price: $650 CAD'
    },
    {
        caption: 'Black Nike',
        alt: 'B1-01',
        src: 'images/ni3.jpg',
        text: 'Available size 40 42 42',
        text1:'Color Black/grey',
        text2: 'Price: $600 CAD'
    }
];

window.onload = function() {
    loadImgMen();
  };
  
  function loadImgMen() {
    var x = document.querySelector('.outputimgmenhd'); //. is a class
//load img from 1 to last element in the array, make a loop, the first if
// statement will wrap 3 images into the same div. The else will just wrap
// each image in a div.
    for (var i = 0; i < menimgs.length; i++) {
      if (i % 3 === 0 || i === 0) {
  //when i== 0/3/6/9/etc it wrap 3 pictures into the same line
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
  