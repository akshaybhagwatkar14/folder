
let image=[
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDo4uqMsiJwk_0fOtOygqFjCdALjFDAJcrXA&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrnNbDhCSCJjSQwx_zwi18h8NIvormaU5Zg&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-zYuaHhbyi5lCUlTCo1VB8Gnbum0p6aSxQ&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ginZG0ZmAWQ9FAnEFqwvCtPViFPILHixAg&usqp=CAU"
  ];
  
  let add=0;

  let img=document.createElement("img");

  setInterval(function(){

      if(add==image.length)
      {
          add=0;
      }

      img.innerText=null;

      img.src=image[add];

      document.getElementById("slideshow").append(img);
      add++;
  },1700);