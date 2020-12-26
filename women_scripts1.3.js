var menimgs = [
    {
      caption: 'Black long dress',
      alt: 'A1-01',
      src: 'images/dr1.jpg',
      text: 'Available size: S M',
      text1: 'Color:White/Black/Pink',
      text2:  'Price:$250.00 CAD'
    },
    {
      caption: 'Short White Dress',
      alt: 'A1-02',
      src: 'images/dr2.jpg',
      text: 'Available size: S M',
      text1: 'Color:WhiteRed/Yellow/Green',
      text2:  'Price:$150.00 CAD'
    },
    {
      caption: 'Purple Gorgeous Dress',
      alt: 'A1-03',
      src: 'images/dr5.jpg',
      text: 'Available size: S M L',
      text1: 'Color:Purple',
      text2:  'Price:$350.00 CAD'
    },
    {
      caption: 'Latina Red Dress',
      alt: 'A1-04',
      src: 'images/dr4.jpg',
      text: 'Available size: M L',
      text1: 'Color:Burgundy',
      text2:  'Price:$250.00 CAD'
    }
  ];
  
  window.onload = function() {
    loadImgWomen();
  };
     //load img from 1 to last element in the array, make a loop, the first if
  // statement will wrap 4 images into the same div. The else will just wrap
  // each image in a div.
  function loadImgWomen() {
    var x = document.querySelector('.outputimgwomend'); //. is a class
    //when it is i==4, close the img container div, then start again
  //i == 4 is 4 images on the same line 
    for (var i = 0; i < menimgs.length; i++) {
      //when i== 0/4/12/16/etc it wrap 3 pictures into the same line
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
  