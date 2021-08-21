// memory price update
function updateMemory(memoryType){
    const memoryCost = document.getElementById('memory-cost');
    
    
    if(memoryType == 'memory-8'){
        memoryCost.innerText = 0;
        
    }
    else if(memoryType == 'memory-16'){
        memoryCost.innerText = 180;
    }   
    // totalCost  call
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = getTotalCost();
    // total amount call
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = getTotalAmount();
    
}

// Storage price Update 

function updateStorage(storageType){
    const storageCost = document.getElementById('storage-cost');

    if(storageType == 'storage-256'){
        storageCost.innerText = 0;
    }
    else if(storageType == 'storage-512'){
        storageCost.innerText = 100;
    }
    else if(storageType == 'storage-1TB'){
        storageCost.innerText = 180;
    }
    // totalCost  call
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = getTotalCost();
    // total amount call
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = getTotalAmount();
}

//  delivery charge  update

function chargeDelivery(deliveryType){
    const deliveryCost = document.getElementById('delivery-cost');

    if(deliveryType == 'free-delivery'){
        deliveryCost.innerText = 0;
    }
    else if(deliveryType == 'charge-delivery'){
        deliveryCost.innerText = 20;
    }
    // totalCost  call
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = getTotalCost();
    // total amount call
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = getTotalAmount();
}



//  total price update
function getTotalCost(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice) 
    return totalCost;
}

function getTotalAmount(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalAmount = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice) 
    return totalAmount;
}

// memory 8gb event handler
document.getElementById('memory-8').addEventListener('click',function(event){
    updateMemory(event.currentTarget.id);   
});
// memory 16gb event handler
document.getElementById('memory-16').addEventListener('click',function(event){    
    updateMemory(event.currentTarget.id); 
});

//  storage 256Gb event handler 
document.getElementById('storage-256').addEventListener('click',function(event){
    updateStorage(event.currentTarget.id);
});
//  storage 512Gb event handler 
document.getElementById('storage-512').addEventListener('click',function(event){
    updateStorage(event.currentTarget.id);
});
//  storage 1TB event handler 
document.getElementById('storage-1TB').addEventListener('click',function(event){
    updateStorage(event.currentTarget.id);
});
// Delivery charge free event handler 
document.getElementById('free-delivery').addEventListener('click',function(event){
    chargeDelivery(event.currentTarget.id);
});
// Delivery charge pay event handler 
document.getElementById('charge-delivery').addEventListener('click',function(event){
    chargeDelivery(event.currentTarget.id);
});
// apply button event handler discount total using promo code
document.getElementById('promo-btn').addEventListener('click', function(event){
    const promoCode = document.getElementById('promo-input');
    const totalAmount = document.getElementById('total-amount');
    if(promoCode.value.toLowerCase() == 'stevekaku'){
        const totalCost = getTotalCost();
        totalAmount.innerText = totalCost - (totalCost * .20);
    }
    else {
        alert ("Invalid promo code!!!!")
    } 
    promoCode.value = '';
});








