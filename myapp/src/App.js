import Navbar from "./components/Navbar/navbar"
import Content from "./components/content/content"
import Card from "./components/Cards/card"


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>

       {/* Content */}
       <Content/>

      {/* Cards */}
      <Card name="John" age="25 years old" town="New York"/>
      <Card name="Rachel" age="31 years old" town="London"/>

    </div>
  );
}

export default App;
