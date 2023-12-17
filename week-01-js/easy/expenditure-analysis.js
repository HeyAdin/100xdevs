/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total totalSpent spent as its value.
  Transaction - an object like { itemName, category, totalSpent, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object
  let categorySpending = {};

  // iterate on transactions array

  transactions.forEach((transaction)=>{
    
    const {category , price} = transaction;
    if(category in categorySpending){
      categorySpending[category]+=price;
    }
    else{
      categorySpending[category] = price;
    }
  })
  const expense = Object.keys(categorySpending).map((category)=>({
    category : category,
    totalSpent : categorySpending[category],
  }));

  return expense;
}

module.exports = calculateTotalSpentByCategory;
