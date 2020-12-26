var menimgs = [
    {
        caption: 'Trendy Neutral Tone 1',
        alt: 'B1-01',
        src: 'images/nt1.jpg',
        text: 'Hoodie Sand Color| Size M | $70 CAD',
        text1:'Sporty jogger Black| Size L | $100 CAD',
        text2: 'Snearker | Size 42 | $250 CAD'
    },
    {
        caption: 'Trendy Neutral Tone 2',
        alt: 'B1-01',
        src: 'images/nt2.jpg',
        text: 'Hoodie Gray| Size M | $80 CAD',
        text1:'Army color jogger| Size S | $150 CAD',
        text2: 'Hoodie and Jogger | SALE: $200 CAD'
    },
    {
        caption: 'Trendy Neutral Tone 3',
        alt: 'B1-01',
        src: 'images/nt3.jpg',
        text: 'Sweater Nude Color| Size M | $80 CAD',
        text1:'Light Brown Jogger| Size S | $120 CAD',
        text2: 'Face Mask | Freesize | $50 CAD'
    }
    
];

window.onload = function() {
    loadImgMen();
  };
  
  function loadImgMen() {
    var x = document.querySelector('.outputimgmennt'); //. is a class
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
  