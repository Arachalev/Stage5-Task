
let array1=[{
    image:"macbook.jpg",
    name:"Macbook Air",
    price:"$1900.99"
},{
    image:"mac3.jpg",
    name:"Macbook Pro 13",
    price:"$2499.99"
}
,{
    image:"mac2.jpg",
    name:"Macbook Pro 14",
    price:"$3000.00"
}
,{
    image:"mac4.jpg",
    name:"Macbook Air M1",
    price:"$1199.99"
}
,{
    image:"asus1.jpg",
    name:"Asus Zephyrus M13",
    price:"$1499.99"
}
,{
    image:"asus duo.jpg",
    name:"Asus Zephyrus DUO",
    price:"$1800"
}
,{
    image:"asus2.jfif",
    name:"Asus Proart M14",
    price:"$2500"
}
,{
    image:"asus4.jpg",
    name:"Asus ZenBook 12",
    price:"$1999.99"
}
,{
    image:"dell3.webp",
    name:"AlienWare Strix",
    price:"$3499.99"
}
,{
    image:"dell1.jpg",
    name:"Dell XPS 1",
    price:"$4000.00"
}
,{
    image:"dell2.webp",
    name:"`Dell XPS 13`",
    price:"$1399.99"
}
,{
    image:"dell5.jpg",
    name:"Dell G 15",
    price:"$1699.99"
}
]
let sneakers = document.querySelector(".imageBox")
array1.forEach((e)=>{
let html = `<div class="col-lg-3 col-md-4 col-sm-6 bg-light ">
                <img src="img/${e.image}" class="img-fluid" id="myImg" alt="${e.name}">
                <div class="text-center">
                    <h3 class=" text-capitalize">${e.name}</h3>
                    <p>${e.price}</p>    
                </div>
             </div>`
            sneakers.insertAdjacentHTML("beforeend", html);
        })