//Dla elementów: .select__dropdown, .summary__total i .list__item,
// przewidziano również klasę open której dodanie sprawi, że dany element się pojawi.

const productsInput = document.getElementById("products");
const productsList = document.querySelector("[data-id = 'products']");
const ordersInput = document.getElementById("orders");
const ordersList = document.querySelector("[data-id = 'orders']");
const packageSelect = document.querySelector(".select__input");
const dropdown = document.querySelector(".select__dropdown");
const basic = dropdown.querySelector("[data-value='basic']");
const professional =dropdown.querySelector("[data-value='professional']");
const premium = dropdown.querySelector("[data-value='premium']")
const packageSelected = document.querySelector("[data-id='package']");
const totalInfo = document.querySelector(".summary__total");
const totalPrice = document.querySelector(".total__price");
const firstCheckbox = document.getElementById("accounting");
const secondCheckbox = document.getElementById("terminal");
const accounting = document.querySelector("[data-id='accounting']");
const terminal = document.querySelector("[data-id='terminal']");
let productsTotal = 0;
let ordersTotal = 0;
let price = 0;
let priceTotal = [0,0,0,0,0];

productsInput.addEventListener("input", function(){
    if(productsInput.value >=1){
        productsList.classList.add("open");
    }else{
        productsList.classList.remove("open");
    }
    productsList.querySelector(".item__calc").innerText = productsInput.value + " * 0.5$";
    productsList.querySelector(".item__price").innerText =( productsInput.value * 0.5) + "$";
    productsTotal = productsInput.value * 0.5;
    priceTotal[0]=productsTotal;
    totalPrice.innerText = priceTotal.reduce((prev,next) =>{
        return prev + next;
    }) + "$";
})


ordersInput.addEventListener("input", function(){
    if(ordersInput.value >=1){
        ordersList.classList.add("open");
    }else{
        ordersList.classList.remove("open");
    }
    ordersList.querySelector(".item__calc").innerText = ordersInput.value + " * 0.25$";
    ordersList.querySelector(".item__price").innerText = (ordersInput.value * 0.25) + "$";
    ordersTotal = ordersInput.value * 0.25;
    priceTotal[1]=ordersTotal;
    totalPrice.innerText = priceTotal.reduce((prev,next) =>{
        return prev + next;
    }) + "$";
})


packageSelect.addEventListener("click",function(){
    dropdown.classList.toggle("open");
})


basic.addEventListener("click",function(){
    packageSelect.innerText = basic.innerText;
    dropdown.classList.toggle("open");
    packageSelected.classList.add("open");
    packageSelected.querySelector(".item__calc").innerText = "Basic";
    packageSelected.querySelector(".item__price").innerText = "$10";
    price = 10;
    priceTotal[2]=price;
    totalInfo.classList.add("open");
    totalPrice.innerText = priceTotal.reduce((prev,next) =>{
        return prev + next;
    }) + "$";
})


professional.addEventListener("click",function(){
    packageSelect.innerText = professional.innerText;
    dropdown.classList.toggle("open");
    packageSelected.classList.add("open");
    packageSelected.querySelector(".item__calc").innerText = "Professional";
    packageSelected.querySelector(".item__price").innerText = "$25";
    price = 25;
    priceTotal[2] = price;
    totalInfo.classList.add("open");
    totalPrice.innerText = priceTotal.reduce((prev,next) =>{
        return prev + next;
    }) + "$";
})


premium.addEventListener("click",function(){
    packageSelect.innerText = premium.innerText;
    dropdown.classList.toggle("open");
    packageSelected.classList.add("open");
    packageSelected.querySelector(".item__calc").innerText = "Premium";
    packageSelected.querySelector(".item__price").innerText = "$50";
    price = 50;
    priceTotal[2] = price;
    totalInfo.classList.add("open");
    totalPrice.innerText = priceTotal.reduce((prev,next) =>{
        return prev + next;
    }) + "$";
})
firstCheckbox.addEventListener("click",function(){
    accounting.classList.toggle("open");
    // if(firstCheckbox.checked){
    //     totalPrice.innerText = productsTotal + ordersTotal + price + 10 +"$";
    //     if(secondCheckbox.checked){
    //         totalPrice.innerText = productsTotal + ordersTotal + price + 10 + 10 + "$";
    //     }
    // }else if(secondCheckbox.checked){
    //         totalPrice.innerText = productsTotal + ordersTotal + price + 10 + "$";
    //     }else{
    //     totalPrice.innerText = productsTotal + ordersTotal + price + "$";
    // }
    if(firstCheckbox.checked){
        priceTotal[3]= 10;
        totalPrice.innerText = priceTotal.reduce((prev,next) =>{
            return prev + next;
        }) + "$";
    }else{
        priceTotal[3] = 0;
        totalPrice.innerText = priceTotal.reduce((prev,next) =>{
            return prev + next;
        }) + "$";
    }
})
secondCheckbox.addEventListener("click",function(){
    terminal.classList.toggle("open");
    // if(firstCheckbox.checked){
    //     totalPrice.innerText = productsTotal + ordersTotal + price + 10 +"$";
    //     if(secondCheckbox.checked){
    //         totalPrice.innerText = productsTotal + ordersTotal + price + 10 + 10 + "$";
    //     }
    // }else if(secondCheckbox.checked){
    //     totalPrice.innerText = productsTotal + ordersTotal + price + 10 + "$";
    // }else{
    //     totalPrice.innerText = productsTotal + ordersTotal + price + "$";
    // }
    if(secondCheckbox.checked){
        priceTotal[4] = 10;
        totalPrice.innerText = priceTotal.reduce((prev,next) =>{
            return prev + next;
        }) + "$";
    }else{
        priceTotal[4]=0;
        totalPrice.innerText = priceTotal.reduce((prev,next) =>{
            return prev + next;
        }) + "$";
    }
})


