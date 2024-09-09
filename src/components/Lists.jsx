function Lists() {
    const fruits = [{ id: 1, name: "apple", calories: 95 },
        { id: 2, name: "Banana", calories: 30 },
         { id: 3, name: "Orange", calories:     110 }]
       
    
     const  lowCalFruits =fruits.filter(fruit=> fruit.calories<60)
    const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>{lowCalFruits.name} :&nbsp;<b>{lowCalFruits.calories}</b></li>);
   
    return (<ol>{ listItems}</ol>)
}
export default Lists;