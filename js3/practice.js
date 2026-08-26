function calculateFinalPrice(price, discountPercentage, taxRate) {
    if (price < 0 || discountPercentage < 0 || taxRate < 0) {
        return "Данные введены неверно";
    }
    
    const discount = price * (discountPercentage / 100);
    const priceAfterDiscount = price - discount;
    const tax = priceAfterDiscount * (taxRate / 100);
    const finalPrice = priceAfterDiscount + tax;
    
    return finalPrice;
}

console.log(calculateFinalPrice(100, 0, -10));

function checkAccess(username, password) {
    if (username === "admin" && password === 123456) {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

console.log(checkAccess("admin", 123456));

function getTimeOfDay(hour) {
  if (hour < 0 || hour > 23) {
    return 'Некорректное время';
  } else if (hour < 5) {
    return 'ночь';
  } else if (hour < 12) {
    return 'утро';
  } else if (hour < 18) {
    return 'день';
  } else {
    return 'вечер';
  }
}

console.log(getTimeOfDay(1));

function findFirstEven (start, end) {
	for (i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return `Первое четное число ${i}`;
		} 
	}
	return "Четных чисел нет";
}

console.log(findFirstEven(12, 20))