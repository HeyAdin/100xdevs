/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total totalSpent spent as its value.
  Transaction - an object like { itemName, category, totalSpent, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expense = [];
    if(transactions.length==0){
      return expense;
    }
    expense = transactions.map((lists)=>({category:lists.category,totalSpent:lists.price}));
    for(let i = 0; i < expense.length; i++){
        for(let j = i+1; j<expense.length; j++){
            if(expense[i]["category"]== expense[j]["category"]){
                expense[i]["totalSpent"]=expense[i]["totalSpent"]+expense[j]["totalSpent"];
                expense.splice(j,1);
            }
        }
    }

    return expense;
}
module.exports = calculateTotalSpentByCategory;


// const categoryMap = {};
//   const result = [];

//   transactions.forEach((element) => {
//     !categoryMap[element.category]
//       ? (categoryMap[element.category] = element.price)
//       : (categoryMap[element.category] += element.price);
//   });

//   for (let key in categoryMap) {
//     result.push({ category: key, totalSpent: categoryMap[key] });
//   }

//   return result;