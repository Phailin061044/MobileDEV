import React, {useState} from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./data"

const allCategories = ["All",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  )
]

//const allCategories = [...new Set(data.map((item)=>item.category))]
//console.log(catagory)
const App = () => {
  const [menuItem, setMenuItem] = useState(data)

  const filterItems =(category)=>{
    if(category == "All"){
      setMenuItem(data) //ใส่ data คือโหลดใหม่ทั้งหมด
    }
    else{
      const newItems = data.filter(
        (item) => item.category === category //ถ้า new ใหม่จะมาดูว่าตรงกับ catagory ที่ตั้งไว้ไหม
        )
        setMenuItem(newItems)
    }
  }
  return (
    <div>
      <h1>Workshop 2 : Food Menu</h1>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
        <Categories allCategories={allCategories} filterItems={filterItems}/>
        <Menu item ={menuItem}/>
        </section>
      </main>
  </div>
  );
};

export default App;
