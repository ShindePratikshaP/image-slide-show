
const images=["./images/nature3.jpg","./images/nature1.jpg","./images/nature2.jpg","./images/nature4.jpg" ,"./images/nature5.jpg"];
        const slide=document.getElementById(`slide`);
        let index=0;
        function right(){
          if(index<images.length -1){
            index++;
          } 
          else{
            index=0
          }
          slide.src=images[index]

        }
        
        function left(){
          if(index>0){
            index--;
          } 
          else{
            index=images.length -1;
          }
          slide.src=images[index]
        }
