var menimgs = [
    {
        caption: 'Women Jeans',
        alt: 'B1-01',
        src: 'images/wj2.jpg',
        text: '/* NEW RELEASE */',
        text1:'Color:Denim',
        text2: 'Price: $350 CAD'
    },
    {
        caption: 'Long Sleeve Shirt',
        alt: 'B1-01',
        src: 'images/nr2.jpg',
        text: '/* NEW RELEASE */',
        text1:'Color Black',
        text2: 'Price: $70 CAD'
    },
    {
        caption: 'Bomber Jacket',
        alt: 'B1-01',
        src: 'images/nr5.jpg',
        text: '/* NEW RELEASE */',
        text1:'Color: Burgundy',
        text2: 'Price: $150 CAD'
    },
    {
        caption: 'Men Blazer',
        alt: 'B1-01',
        src: 'images/nr4.jpg',
        text: '/* NEW RELEASE */',
        text1:'Color Gray/Black',
        text2: 'Price: $200 CAD'
    }
];

window.onload = function() {
    loadImgMen();
  };
  
  function loadImgMen() {
    var x = document.querySelector('.outputnr'); //. is a class
   //load img from 1 to last element in the array, make a loop, the first if
// statement will wrap 3 images into the same div. The else will just wrap
// each image in a div.
    for (var i = 0; i < menimgs.length; i++) {
      if (i % 2 == 0 || i == 0) {
        //when i== 0/2/4/6/etc it wrap 3 pictures into the same line
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
      }
    }
  }
  