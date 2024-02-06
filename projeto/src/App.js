
import './App.css';
import Row from './components/Row.js';
import categories  from "./api.js";

function App() {

  return(
    <div className="App">
        {/* Navbar */}
        {/* destaque */}
        {/* Em alta */}
        {/* filmes de cada categoria */}
        {categories.map((category) => {
          return (
             <Row 
              key={category.name} 
              title={category.title} 
              path={category.path}
            />
          );
        })}
      </div> 
  );

}

export default App;
