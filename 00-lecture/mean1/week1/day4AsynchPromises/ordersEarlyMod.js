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

    callback(warehouse[item]);  //video says:  callback is this function here and highlights from lines 25-18 starting function(paint) { console.log(paint);}
  }, deliveryTime);
}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

orderSupplies('paint', function (item) { //function runs when paint is ready
  receivedItem(item);
  orderSupplies('brush', receivedItem);
});