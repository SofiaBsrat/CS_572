{
    function applyCoupon(item) {
      return function(discount) {
          const price = item.price - item.price * discount/100;
          return { item, price }
        
      }
    }
  
    const item = {
      name: 'Biscuits',
      type: 'regular',
      category: 'food',
      price: '200'
    }
  
    console.log(applyCoupon(item)(10).price === 180);
  }