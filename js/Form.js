 class Form{

  constructor(){


  }

   display(){

     var title = createElement('h2');
     title.html("CarRracingGame")
     title.position(130,0);

     var input = createInput("name");
     input.position(130,160);

     var button = createButton("play");
     button.position(130,160);

     button.mousePressed(function(){

        input.hide();
        button.hide();

        var name = input.value();
        
        plryarCount = pleyarCount + 1;
        pleyar.update(name);
        pleyar.updateCount(pleyarCount);

        var greeting = createElement('h2');
        greeting.html('hello' + name);
        greeting.position(130,160);

     })

   }


 }