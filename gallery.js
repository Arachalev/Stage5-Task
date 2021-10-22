
let array1=[{
    image:"macbook.jpg",
    name:"Macbook Air",
    price:"$1900.99"
},{
    image:"mac3.jpg",
    name:"Asus ROG Zephyrus duo",
    price:"$2499.99"
}
,{
    image:"mac2.jpg",
    name:"Macbook pro",
    price:"$3000.00"
}
,{
    image:"mac4.jpg",
    name:"Taylor Chucks",
    price:"$122.50"
}
,{
    image:"asus1.jpg",
    name:"Old school vans",
    price:"$92.99"
}
,{
    image:"asus duo.jpg",
    name:"yeezy 350",
    price:"$142.50"
}
,{
    image:"asus2.jfif",
    name:"Air Jordans 1",
    price:"$122.50"
}
,{
    image:"asus4.jpg",
    name:"Air Jordans retro 350",
    price:"$132.50"
}
,{
    image:"dell3.webp",
    name:"Converse all star",
    price:"$232.50"
}
,{
    image:"dell1.jpg",
    name:"Old school vams",
    price:"$78.50"
}
,{
    image:"dell2.webp",
    name:"Nike Sneakers",
    price:"$138.99"
}
,{
    image:"dell5.jpg",
    name:"air jordan 4 retro",
    price:"$127.50"
}
]
let sneakers = document.querySelector(".imageBox")
array1.forEach((e)=>{
let html = `<div class="col-lg-3 col-md-4 col-sm-6 bg-light">
                <img src="img/${e.image}" class="img-fluid" id="myImg" alt="${e.name}">
                <div class="text-center">
                    <h3 class=" text-capitalize">${e.name}</h3>
                    <p>${e.price}</p>    
                </div>
             </div>`
            sneakers.insertAdjacentHTML("beforeend", html);
        })