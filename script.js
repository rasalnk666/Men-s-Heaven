const products=[
{name:"Linen Shirt",price:799,image:linen-shirt.jpg"},
{name:"Wide Leg Jeans",price:1299,image:wide-leg-jeans.jpg"},
{name:"Line Shirt",price:799,image:line-shirt.jpg"}];

// Replace with your WhatsApp number, country code included, no + or spaces.
const WHATSAPP_NUMBER="918137929949";
const grid=document.getElementById("grid"),search=document.getElementById("search"),none=document.getElementById("none"),count=document.getElementById("count"),toast=document.getElementById("toast");
let cart=0;
function render(list){grid.innerHTML=list.map(p=>`<article class="card"><img src="${p.image}" alt="${p.name}"><div class="info"><h3>${p.name}</h3><div class="price">₹${p.price.toLocaleString("en-IN")}</div><button class="enquire" onclick="enquire('${p.name}',${p.price})">💬 Enquire Now</button></div></article>`).join("");none.style.display=list.length?"none":"block"}
function enquire(name,price){cart++;count.textContent=cart;let msg=`Hi MEN'S HEAVEN, I'm interested in ${name} (₹${price}). Please share more details.`;if(!WHATSAPP_NUMBER.includes("X"))window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");else{toast.textContent="Add your WhatsApp number in script.js";toast.style.display="block";setTimeout(()=>toast.style.display="none",2500)}}
search.addEventListener("input",e=>{let q=e.target.value.toLowerCase();render(products.filter(p=>p.name.toLowerCase().includes(q)))});document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");render(products);
