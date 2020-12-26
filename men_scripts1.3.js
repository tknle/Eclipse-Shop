var menimgs = [
    {
        caption: 'Orange Hoodie',
        alt: 'B1-01',
        src: 'images/hd1.jpg',
        text: 'Available size S M L XL ',
        text1:'Color: Orange/Green',
        text2: 'Price: $55 CAD'
    },
    {
        caption: 'Text Hoodie',
        alt: 'B1-01',
        src: 'images/hd2.jpg',
        text: 'Available size M L',
        text1:'Color Burgundy',
        text2: 'Price: $50 CAD'
    },
    {
        caption: 'Sand Hoodie',
        alt: 'B1-01',
        src: 'images/hd3.jpg',
        text: 'Available size S M L',
        text1:'Color: Tan/ Denim',
        text2: 'Price: $50 CAD'
    },
    {
        caption: 'Black Hoodie',
        alt: 'B1-01',
        src: 'images/hd4.jpg',
        text: 'Available size XS S M L XL',
        text1:'Color Black/grey',
        text2: 'Price: $60 CAD'
    }
];

window.onload = function() {
    loadImgMen();
  };
//load img from 1 to last element in the array, make a loop, the first if
// statement will wrap 4 images into the same div. The else will just wrap
// each image in a div.
  function loadImgMen() {
    var x = document.querySelector('.outputimgmenhd'); //. is a class
 //when i== 0/4/12/16/etc it wrap 3 pictures into the same line
    for (var i = 0; i < menimgs.length; i++) {
      if (i % 4 === 0 || i === 0) {
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
  