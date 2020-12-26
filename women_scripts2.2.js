var menimgs = [
    {
        caption: 'Nike Air Force',
        alt: 'B1-01',
        src: 'images/ws1.jpg',
        text: 'Available size 42 43 44 45 ',
        text1:'Color: White',
        text2: 'Price: $100 CAD'
    },
    {
        caption: 'Mc.Queen Sneaker',
        alt: 'B1-01',
        src: 'images/ws2.jpg',
        text: 'Available size 40 41 42',
        text1:'Color Yellow',
        text2: 'Price: $350 CAD'
    },
    {
        caption: 'Nike special Edition',
        alt: 'B1-01',
        src: 'images/ws3.jpg',
        text: 'Available size 43 44 45 46',
        text1:'Color: MultiColor',
        text2: 'Price: $500 CAD'
    },
    {
        caption: 'Nike Multicolor',
        alt: 'B1-01',
        src: 'images/ws4.jpg',
        text: 'Available size 43 44 ',
        text1:'Color Black/grey',
        text2: 'Price: $660 CAD'
    },
    {
        caption: 'Alexander',
        alt: 'B1-01',
        src: 'images/ws5.jpg',
        text: 'Available size 44 45',
        text1:'Color Black/grey',
        text2: 'Price: $650 CAD'
    },
    {
        caption: 'Converse High',
        alt: 'B1-01',
        src: 'images/ws9.jpg',
        text: 'Available size 40 42 42',
        text1:'Color Black/grey',
        text2: 'Price: $100 CAD'
    }
];

window.onload = function() {
    loadImgMen();
  };
  //load img from 1 to last element in the array, make a loop, the first if
  // statement will wrap 3 images into the same div. The else will just wrap
  // each image in a div.
  function loadImgMen() {
    var x = document.querySelector('.outputimgwomensn2'); //. is a class
  //when it is i==3, close the img container div, then start again
  //i == 3 is 3 images on the same line 
    for (var i = 0; i < menimgs.length; i++) {
       //when i== 0/3/6/9/etc it wrap 3 pictures into the same line
      if (i % 3 === 0 || i === 0) {
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
  