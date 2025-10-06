function cdisclaimer() {
    document.getElementById('disclaimer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    // Восстанавливаем состояние кнопок из localStorage
    const purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    
    buyButtons.forEach(button => {
        const productName = button.closest('.tovar-item').querySelector('h3').textContent;
        
        // Проверяем, был ли товар уже куплен
        if (purchasedItems.includes(productName)) {
            button.textContent = 'Куплено ✓';
            button.classList.add('bought');
            button.disabled = true;
        }
        
        button.addEventListener('click', function() {
            const productName = this.closest('.tovar-item').querySelector('h3').textContent;
            const productPrice = this.closest('.tovar-item').querySelector('.price').textContent;
            
            // Меняем кнопку
            this.textContent = 'Куплено ✓';
            this.classList.add('bought');
            this.disabled = true;
            
            // Сохраняем в localStorage
            if (!purchasedItems.includes(productName)) {
                purchasedItems.push(productName);
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
            }
            
            showPurchaseNotification(productName, productPrice);
        });
    });
});