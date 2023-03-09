// Client facing scripts here

///Function to create html of summary
const createOrderElement = function(orderItem) {

  let $order = `
  <div class="order-list-item">
    <span class="order-item">
     <i class="bi bi-${orderItem.quantity
    }-circle-fill item-count" id="item-name"></i> ${orderItem.title}
    </span>
    <span class="order-price">
     <span>$${parseFloat(orderItem.price).toFixed(2)}
     </span>
    </span>
</div>`;
  return $order;
};

////Function to render the orderlist html on the order summary
const renderSummary = function(orderList) {
  let estimatedTime = orderList[0].estimated_time;
   let total = 0;
  const $summaryContainer = $("#summary-container");

   for (const order of orderList) {
     total += order.price * order.quantity;
    const $summaryHtml = createOrderElement(order);
    $summaryContainer.prepend($summaryHtml);
   }
  $("#order-total").text((total).toFixed(2));

  if (orderList[0].order_approved === null) {
    $(".pending").slideDown();
  }
  console.log(orderList[0].order_approved);

  if (orderList[0].order_approved !== null) {
    $(".pending").hide();
    $(".estimate-container").slideDown();
    $("#estimated-time").text(estimatedTime);
  }

  if (orderList[0].order_completed) {
    $(".pending").hide();
    $(".estimate-container").hide();
    $(".complete").slideDown();
  }

  // complete

  // var currentdate = new Date();
  // var datetime = "Your order was placed on " + currentdate.getDate() + "/"
  //                 + (currentdate.getMonth()+1)  + "/"
  //                 + currentdate.getFullYear() + " @ "
  //                 + currentdate.getHours() + ":"
  //                 + currentdate.getMinutes() + ":"
  //                 + currentdate.getSeconds();
  // console.log(datetime);
};

$(document).ready(function() {
  $.get("/order-summary/get-all-orders", function(data) {

    const { clientId, dishes } = data;
    // console.log(dishes);
    renderSummary(dishes);
  });

});
