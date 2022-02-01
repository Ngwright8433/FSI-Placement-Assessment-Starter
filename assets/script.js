let gb = 0
let cc = 0
let sugar = 0

let QtyTotal = 0

function updateCookieTotal(displayQuantity){
    let CookieTotal = document.querySelector("#qty-total")
    QtyTotal = gb+cc+sugar
    CookieTotal.textContent = displayQuantity
    console.log ("total should be updating")

}

let gbminusBtn = document.querySelector("#minus-gb")
let gbaddBtn = document.querySelector("#add-gb")

let quantityGb = document.querySelector("#qty-gb")

function updateQuantityGb(displayQuantity){
    quantityGb.innerHTML = displayQuantity
}


gbminusBtn.addEventListener("click", function(){
    if (gb > 0 ){
        gb--
    } else {
        window.alert("Nothing in cart")
    }
    updateQuantityGb(gb)
    updateCookieTotal(QtyTotal)
})

gbaddBtn.addEventListener("click", function(){
    gb++
    updateQuantityGb(gb)
    updateCookieTotal(QtyTotal)
})

let ccminusBtn = document.querySelector("#minus-cc")
let ccaddBtn = document.querySelector("#add-cc")

let quantityCC = document.querySelector("#qty-cc")

function updateQuantityCC(displayQuantity){
    quantityCC.innerHTML = displayQuantity
}


ccminusBtn.addEventListener("click", function(){
    if (cc > 0 ){
        cc--
    } else {
        window.alert("Nothing in cart")
    }
    updateQuantityCC(cc)
    updateCookieTotal(QtyTotal)
})

ccaddBtn.addEventListener("click", function(){
    cc++
    updateQuantityCC(cc)
    updateCookieTotal(QtyTotal)
})

    let sugarminusBtn = document.querySelector('#minus-sugar')
    let sugaraddBtn = document.querySelector("#add-sugar")
    
    let quantitySugar = document.querySelector("#qty-sugar")

    function updateQuantitySugar(displayQuantity){
        quantitySugar.innerHTML = displayQuantity
    }
    
    
    sugarminusBtn.addEventListener("click", function(){
        if (sugar > 0 ){
            sugar --
        } else {
            window.alert("Nothing in cart")
        }
        updateQuantitySugar(sugar)
        updateCookieTotal(QtyTotal)
    })
    
    sugaraddBtn.addEventListener("click", function(){
        sugar++
        updateQuantitySugar(sugar)
        updateCookieTotal(QtyTotal)
    })