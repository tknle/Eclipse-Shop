var menimgs = [
    {
        caption: 'Date Night Outfit 1',
        alt: 'B1-01',
        src: 'images/dn1.jpg',
        text: 'Black Litte Dress| Size S | $170 CAD',
        text1:'Red Bag| Size S | $1000 CAD',
        text2: 'High Bootie | Size 38 | $250 CAD'
    },
    {
        caption: 'Date Night Outfit 2',
        alt: 'B1-01',
        src: 'images/dn2.jpg',
        text: 'Black Dress| Size M | $80 CAD',
        text1:'Red Bag| Size S | $1000 CAD',
        text2: 'White Sneaker | SALE: $200 CAD'
    },
    {
        caption: 'Date Night Outfit 3',
        alt: 'B1-01',
        src: 'images/dn3.jpg',
        text: 'Fur Coat| Size M | $280 CAD',
        text1:'Mesh Shirt| Size S | $80 CAD',
        text2: 'trendy Glasses | Freesize | $150 CAD'
    }
    
];

window.onload = function() {
    loadImgMen();
  };
  //load img from 1 to last element in the array, make a loop, the first if
  // statement will wrap 3 images into the same div. The else will just wrap
  // each image in a div.
  function loadImgMen() {
    var x = document.querySelector('.outputimgwomendn'); //. is a class
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
        p.appendChild(button);
        
        var button1 = document.createElement("BUTTON");
        var textin1 = document.createTextNode("Add to cart");
        button1.appendChild(textin1); 
        p1.appendChild(button1);

        var button2 = document.createElement("BUTTON");
        var textin2 = document.createTextNode("Add to cart");
        button2.appendChild(textin2); 
        p2.appendChild(button2);

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
        p.appendChild(button);
        
        button1 = document.createElement("BUTTON");
         textin1 = document.createTextNode("Add to cart");
        button1.appendChild(textin1); 
        p1.appendChild(button1);

         button2 = document.createElement("BUTTON");
         textin2 = document.createTextNode("Add to cart");
        button2.appendChild(textin2); 
        p2.appendChild(button2);
      }
    }
  }
  