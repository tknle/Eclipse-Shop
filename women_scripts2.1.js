var menimgs = [
    {
        caption: 'Mid-high heel',
        alt: 'B1-01',
        src: 'images/hh1.jpg',
        text: 'Available size 37 38 39 ',
        text1:'Color: White',
        text2: 'Price: $200 CAD'
    },
    {
        caption: 'Mid-high Heel Grey',
        alt: 'B1-01',
        src: 'images/hh2.jpg',
        text: 'Available size 36 38',
        text1:'Color Yellow',
        text2: 'Price: $250 CAD'
    },
    {
        caption: 'Vintage HighHeel',
        alt: 'B1-01',
        src: 'images/hh6.jpg',
        text: 'Available size 38 39',
        text1:'Color: Tan/ Denim',
        text2: 'Price: $150 CAD'
    },
    {
        caption: 'See-through Heel',
        alt: 'B1-01',
        src: 'images/hh4.jpg',
        text: 'Available size 36 37 ',
        text1:'Color Black/grey',
        text2: 'Price: $260 CAD'
    },
    {
        caption: 'Floral High-heel',
        alt: 'B1-01',
        src: 'images/hh5.jpg',
        text: 'Available size 37 38 39',
        text1:'Color Black/grey',
        text2: 'Price: $250 CAD'
    },
    {
        caption: 'Bow High-heel',
        alt: 'B1-01',
        src: 'images/hh3.jpg',
        text: 'Available size 40 42 42',
        text1:'Color Black/grey',
        text2: 'Price: $200 CAD'
    }
];

window.onload = function() {
    loadImgMen();
  };
    //load img from 1 to last element in the array, make a loop, the first if
  // statement will wrap 3 images into the same div. The else will just wrap
  // each image in a div.
  function loadImgMen() {
    var x = document.querySelector('.outputimgwomensn1'); //. is a class
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
  