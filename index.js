var arr = [
    {
        dp:"https://imgs.search.brave.com/9sGkGWy51cRxt8oI3qD2Jg57Jj-hSiR1Dojdkwv0MUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvM0JiT29j/WXl5WVBxUHhFdm41/SE5EQS85ZTAyNjI0/Y2FjOWFhZDU1NGUw/Y2Q5NWMzYjVjMzFj/My9Hb2xkZW4tSG91/ci1UaHVtYm5haWwu/anBn",
        story:"https://imgs.search.brave.com/JhDYzZoF9Y1GAZ-yDtzFUXG94pLS9XXPzrjd77R3x2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQLzEwNTg4/MzQ2MTYuanBn"
    },
    {
        dp:"https://images.ctfassets.net/hrltx12pl8hq/4FtERUO6kZErE44fFEaRXf/2087aa0386e087c002585fdc38324f34/Coffe-Break-Thumbnail.jpg",
        story:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        dp:"https://imgs.search.brave.com/8ExXYVb8oTB9fWM1IvIH-QRrnpIM5ifHCiXrTuchK-I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw",
        story:"https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        dp:"https://imgs.search.brave.com/JhDYzZoF9Y1GAZ-yDtzFUXG94pLS9XXPzrjd77R3x2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQLzEwNTg4/MzQ2MTYuanBn",
        story:"https://images.unsplash.com/photo-1523944339743-0fe06f079939?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://imgs.search.brave.com/Q9794HqTg5vOAjbIEcf6byg-2ZMjzQSRaA_ke8Z1x3E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MTQ5ODEzOS9waG90/by9pdGFseS1taWxh/bi13b21hbi13aXRo/LWJyYWlkcy1qdW1w/aW5nLWFnYWluc3Qt/Ymx1ZS13YWxsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1G/V0FSaldfeE8xTXRq/V0pQX0tnZlg2a2dS/RHR3YnZrUzViQU5O/aEJVTzFjPQ",
        story:"https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        dp:"https://imgs.search.brave.com/JhDYzZoF9Y1GAZ-yDtzFUXG94pLS9XXPzrjd77R3x2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQLzEwNTg4/MzQ2MTYuanBn",
        story:"https://images.unsplash.com/photo-1523944339743-0fe06f079939?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]

var fullscreen = document.querySelector('.fullscreen');
var story = document.querySelector('.stories');
var icons = document.querySelector('.prt1');
var picture = document.querySelector('.picture');
var badaheart = document.querySelector('.badaheart');

var chotalove = document.querySelector('.hiddenheart');

var iconClick = document.querySelector('i').addEventListener('click',function(){
    fullscreen.style.display = "none";
    icons.style.display = "block";
})

// creating an empty array
let clutter ="";

//itterate all the elements and add to clutter 
arr.forEach((elem,idx)=>{
    clutter += ` <div class="story">
                <img id = "${idx}" src=${elem.dp} alt="" srcset="">
            </div>`

})

// adding the elements in the HTMl
story.innerHTML = clutter;

// on clicking the story display activates
story.addEventListener('click',function(details){
    // shows the story div
    fullscreen.style.display = "block";
    icons.style.display = "hidden";
   
    // setting the background image
     fullscreen.style.backgroundImage =`url(${arr[details.target.id].story})`;

    // setting the timeout for automatic removal
    setTimeout(function(){
        fullscreen.style.display = "none";
        icons.style.display = "flex"

    },2000)

})



 var flag = 0;

picture.addEventListener('dblclick',function(){   
    badaheart.style.transform = "translate(-50%,-50%) scale(1.5)";
    badaheart.style.opacity  = "100%"
    setTimeout(() => {
        badaheart.style.transform = "translate(-50%,-50%) scale(0)";
        badaheart.style.opacity  = "0%"
    }, 1000);
    chotalove.style.opacity = '100%';
    chotalove.style.transform = `scale(1.1)`;
    flag = 1
})


chotalove.addEventListener('click',function(){
    if(flag == 1){
        chotalove.style.opacity = '0%';
        flag=0;
    }
    else{
        chotalove.style.opacity = '100%';
        flag = 1;
    }
})



