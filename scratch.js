const canvas=document.getElementById("scratch-card1");
const cxt= canvas.getContext("2d")

const init=()=>{
    cxt.fillStyle="#03fcd7";
    cxt.fillRect(0, 0, 350, 350);

    let isDragging=false;

    const scratch=(x,y)=>{
        cxt.globalCompositeOperation="destination-out";
        cxt.beginPath()
        cxt.arc(x,y,24,0,2*Math.PI)
        cxt.fill()

    };

    canvas.addEventListener("mousedown",(event)=>{
   isDragging=true;
   scratch(event.offsetX,event.offsetY);
    })

    canvas.addEventListener("mousemove",(event)=>{
        if(isDragging){
            scratch(event.offsetX,event.offsetY);
        }

    })
    canvas.addEventListener("mouseup",()=>{
        isDragging=false;

    })

    canvas.addEventListener("mouseleave",()=>{
        isDragging=false;

    })

};


async function RandomImg(){
        let items=fetch('https://fakestoreapi.com/products')
     items=await (await items).json()
     console.log(items)
     let Img=document.getElementById("Image")
     let pic=document.createElement('img')
     let arr=new Array()
     let Url=items.filter((room)=>{
      arr.push(room.image)
    })
    let rand=Math.floor(Math.random()*arr.length)
     console.log(arr[rand])
     pic.src=arr[rand]
     
     Img.appendChild(pic)
    
    
        }
    
     

