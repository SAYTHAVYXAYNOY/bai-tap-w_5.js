var man=[
    {
    id:1,
    name:"lacoste",
    code:"TC143NA",
    price:"1.250.000",
    image:"https://www.bluebearuniform.com/wp-content/uploads/2021/01/pict_17RS02BK1FME.png"

    },
    {
    id:2,
    name:"guylaroche",
    code:"TC1342NA",
    price:"1.180.000",
    image:"https://i0.wp.com/sahagrouponline.com/wp-content/uploads/2021/06/GUY_LAROCHE_BAB6200P0NV_1.jpg?fit=800%2C800&ssl=1"
    },
    {
    id:3,
    name:"TFB workwear",
    code:"TC323",
    price:"1.270.000",
    image:"https://tfbworkwear.com/wp-content/uploads/2021/06/55002-men-short-sleeve-shirt-dk-grey-nologo-01-scaled.jpg"

    },
    {
    id:4,
    name:"Lee",
    code:"TC223",
    price:"1.300.000",
    image:"https://lee.co.th/cdn/shop/products/8859286299934_01_1000x1000.jpg?v=1703071289"

    }

]
var women=[
    {
    id:1,
    name:"Vaily",
    code:"TC143",
    price:"250.000",
    image:"https://c.lnwfile.com/_/c/_raw/sg/fw/ue.jpg"

    },
    {
    id:2,
    name:"lacoste",
    code:"TC123",
    price:"200.000",
    image:"https://c.lnwfile.com/_/c/_raw/xk/o8/4j.jpg"
    },
    {
    id:3,
    name:"SFY",
    code:"TC323",
    price:"270.000",
    image:"https://a.lnwfile.com/_/a/_raw/sw/r0/hv.jpg"

    },
    {
    id:4,
    name:"SS-2XL",
    code:"TC223",
    price:"300.000",
    image:"https://jombhol.com/wp-content/uploads/2022/01/3.png"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    }