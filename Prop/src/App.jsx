import React from "react";
import Card from "./components/Card";
function App() {
  return (
    <div className="parent">
      <Card user="Aman Sharma" Age={22} img = 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D'/>
      <Card user="Raju Yadav" Age={21} img = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fHww'/>
      <Card user="Sahil Poll" Age={25} img = 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww'/>
    </div>
  );
}

export default App;
