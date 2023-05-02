const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  const addButton = product.querySelector('.product__add');
  addButton.addEventListener('click', () => {
    const productId = product.dataset.id; 
    const productCount = parseInt(product.querySelector('.product__quantity-value').textContent); 
    const cartProduct = cartProducts.querySelector(`[data-id="${productId}"]`); 

    if (cartProduct) { 
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      const newCount = parseInt(cartProductCount.textContent) + productCount;
      cartProductCount.textContent = newCount >= 0 ? newCount : 0; 
      
      if (newCount === 0) {
        cartProduct.remove();
      }
    } else { 
      const productImage = product.querySelector('.product__image').getAttribute('src');
      const cartProductTemplate = `<div class="cart__product" data-id="${productId}">
                                      <img class="cart__product-image" src="${productImage}">
                                      <div class="cart__product-controls">
                                          <button class="cart__product-button cart__product-button--decrease">-</button>
                                          <div class="cart__product-count">${productCount}</div>
                                          <button class="cart__product-button cart__product-button--increase">+</button>
                                      </div>
                                  </div>`;
      cartProducts.insertAdjacentHTML('beforeend', cartProductTemplate);
      
      const newCartProduct = cartProducts.lastElementChild;
      const decreaseButton = newCartProduct.querySelector('.cart__product-button--decrease');
      const increaseButton = newCartProduct.querySelector('.cart__product-button--increase');
      
      decreaseButton.addEventListener('click', () => {
        const cartProductCount = newCartProduct.querySelector('.cart__product-count');
        const newCount = parseInt(cartProductCount.textContent) - 1;
        cartProductCount.textContent = newCount >= 0 ? newCount : 0;
        
        if (newCount === 0) {
          newCartProduct.remove();
        }
      });
      
      increaseButton.addEventListener('click', () => {
        const cartProductCount = newCartProduct.querySelector('.cart__product-count');
        const newCount = parseInt(cartProductCount.textContent) + 1;
        cartProductCount.textContent = newCount >= 0 ? newCount : 0;
      });
    }
  });
});