import React, {useState} from "react";
import List from "./List"
import data from "./data"

const App = () => {
  const [people, setProple] = useState(data) //รีเทินค่าเมื่อรีเฟรชหน้าจอ //ข้างหน้าชื่อ data หลัง setdata คือ การแก้ไข state

  const clearAll =()=>{
    setProple([])
  }
  return (
    <div>
      <h1>Birthday List Project</h1>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  );
};

export default App;
