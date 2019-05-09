function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
  
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
  
      callback(warehouse[item]);
    }, deliveryTime);
  }
  
  function receivedItem(item) {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
  }
  
//create array of items we want to order with each item being a string

const itemsArray=["paint", "brush"]; //order of items must show needed precedence such as brush before paint

function order(items){
    const products = [];

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        console.log("index is "+ index + " and item: " + item);
        //finishes loop before ordering supplies callback is invoked up above..automatically inside ordering supplies function

        orderSupplies(item, function(product) {
            products[index] = product;
            console.log('got item', index, product, products);
            console.log(products.filter(p => p).length)
        if(products.filter(p => p).length === items.length){
            products.forEach(receivedItem);
        }
        });
    }
}

order(itemsArray);






//   let havePaint = false;
//   orderSupplies('paint', function (item) {
//     console.log("set to true");
//     havePaint = true;
      
//     receivedItem(item)
//     ;
// });



// orderSupplies('brush', function (brush){
//     if(havePaint) {
//         receivedItem(brush);
//     }
//     else{
//         //wait
        
//         const timer= setInterval(function(){ //runs every xx milliseconds, checks, then repeats...when get the paint, kill timer
//             console.log("checking if paint have");
//             if(havePaint){
//                 receivedItem(brush);
//                 clearInterval(timer); //telling clear interval that timer is the thing to cancel
//                                         //problem...if we never receive paint, then forever
//                                         //also, what if there are more things...not extensible 
//             }
//         }, 50)

//         //recheck
//     }
// });
    // orderSupplies(`brush`, handleBrush)
    // function handleBrush(item){
    //     console.log(item.product);
    //     if(havePaint){

    //         return receivedItem(item);
    //     }
    //     console.log("checking whether have paint");
    //     //no paint here
    //     setTimeout(handleBrush, 50, item)
    // }










