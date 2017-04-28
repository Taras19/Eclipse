/*for the button to click and scroll*/
        var contactUsJs=document.querySelector(".contact-us-js");
        var button=document.querySelector(".button");
        var menu=document.querySelector(".menu");
            button.addEventListener("click",function(){
                button.classList.toggle("open-for-button");
                menu.classList.toggle("menu-open");
                containerJoin.classList.remove("container-join-visible");
                contactUsJs.classList.remove("container-contact-visible");
                event.stopPropagation();
            });
            
    
    /*for buttons and photos*/

        
        var containerOurDesignAll=document.querySelectorAll(".container-our-design");
        var containerOurDesignDesign=document.querySelector(".container-our-design-design");
        var containerOurDesignDevelopment=document.querySelector(".container-our-design-development");
        var containerOurDesignBusiness=document.querySelector(".container-our-design-business");
        var containerOurDesignArts=document.querySelector(".container-our-design-arts");

        /**/

        var ourDesignNavElementAll=document.querySelectorAll(".our-design-nav-element");
        var ourDesignNavElementDevelopment=document.querySelector(".our-design-nav li:first-child");
                ourDesignNavElementDevelopment.addEventListener("click",function(){ 
                for(var i=0;i<ourDesignNavElementAll.length;i++){
                    ourDesignNavElementAll[i].classList.remove("active-element");}
                for(var j=0;j<containerOurDesignAll.length;j++){
                    containerOurDesignAll[j].classList.remove("visible-container");
                    }
                
                ourDesignNavElementDevelopment.classList.add("active-element");
                containerOurDesignDevelopment.classList.add("visible-container");
            })

        var ourDesignNavElementDesign=document.querySelector(".our-design-nav li:nth-child(2)");
            ourDesignNavElementDesign.addEventListener("click",function(){ 
                 for(var i=0;i<ourDesignNavElementAll.length;i++){
                    ourDesignNavElementAll[i].classList.remove("active-element");
                }
                for(var j=0;j<containerOurDesignAll.length;j++){
                    containerOurDesignAll[j].classList.remove("visible-container");
                    }
                ourDesignNavElementDesign.classList.add("active-element");
                containerOurDesignDesign.classList.add("visible-container");
            })   
        
        var ourDesignNavElementBusiness=document.querySelector(".our-design-nav li:nth-child(3)");
            ourDesignNavElementBusiness.addEventListener("click",function(){ 
                 for(var i=0;i<ourDesignNavElementAll.length;i++){
                    ourDesignNavElementAll[i].classList.remove("active-element");
                }
                for(var j=0;j<containerOurDesignAll.length;j++){
                    containerOurDesignAll[j].classList.remove("visible-container");
                    }
                ourDesignNavElementBusiness.classList.add("active-element");
                containerOurDesignBusiness.classList.add("visible-container");
            })  

            var ourDesignNavElementArts=document.querySelector(".our-design-nav li:nth-child(4)");
            ourDesignNavElementArts.addEventListener("click",function(){ 
                 for(var i=0;i<ourDesignNavElementAll.length;i++){
                    ourDesignNavElementAll[i].classList.remove("active-element");
                }
                for(var j=0;j<containerOurDesignAll.length;j++){
                    containerOurDesignAll[j].classList.remove("visible-container");
                    }
                ourDesignNavElementArts.classList.add("active-element");
                containerOurDesignArts.classList.add("visible-container");
            })   
            
        
    

    /*CONTACT-US*/
    
        var body=document.querySelector("body");
        var contactUsJs=document.querySelector(".contact-us-js");
            contactUsJs.addEventListener("click",function(){
                 contactUsJs.classList.toggle("container-contact-visible");
                 event.stopPropagation();});
        

    /*SCRIPT FOR BODY*/
        
        
            body.addEventListener("wheel",function(){
                    
                    if(window.innerHeight>290){
                    containerJoin.classList.remove("container-join-visible");
                    button.classList.remove("open-for-button");
                    menu.classList.remove("menu-open");
                    contactUsJs.classList.remove("container-contact-visible");
                    }
                    });
                    

            window.addEventListener("scroll",function(){
                    
                    if(window.innerHeight>290){
                    containerJoin.classList.remove("container-join-visible");
                    button.classList.remove("open-for-button");
                    menu.classList.remove("menu-open");
                    contactUsJs.classList.remove("container-contact-visible");
                        }
                    });

        
            body.addEventListener("click",function(){
                containerJoin.classList.remove("container-join-visible");
                button.classList.remove("open-for-button");
                menu.classList.remove("menu-open");
                contactUsJs.classList.remove("container-contact-visible");
                 
                });
            
        
    

   /* CONTAINER-JOIN*/

    
    var menuItems=document.querySelectorAll(".menu-items:not(.menu-items-join)");
    var containerJoin=document.querySelector(".container-join");
    var buttonJoin=document.querySelector(".menu-items-join");
        buttonJoin.addEventListener("click",function(){
            containerJoin.classList.toggle("container-join-visible");
            event.stopPropagation();
        });
        

        /*for menu items*/
        
        for(var j=0;j<menuItems.length;j++){
            menuItems[j].addEventListener("click",function(){
                    button.classList.remove("open-for-button");
                    menu.classList.remove("menu-open");
            });
        }

/*for scroll to-home*/
       $('.to-home').click(function(event){
        event.preventDefault();

       $('html, body').animate({scrollTop:$('body').position().top}, 500);
});
       /*for scroll to-home*/
       $('.to-next-page-1').click(function(event){
        event.preventDefault();

       $('html, body').animate({scrollTop:$('.latest-design').position().top}, 300);
});
       $('.next-latest-design').click(function(event){
        event.preventDefault();

       $('html, body').animate({scrollTop:$('.features-of-app').position().top}, 300);
});
       $('.next-features-of-app').click(function(event){
        event.preventDefault();

       $('html, body').animate({scrollTop:$('.our-design').position().top}, 300);
});