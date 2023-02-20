import './App.css';
import Person from './components/Person.js'
import Gallery from './components/Gallery.js'

function App() {
  return (
    <div className="container">
      <Gallery source="./images/img1.jpg" text="House"/>
      <Gallery source="./images/img2.jpg" text="Boat House"/>
      <Gallery source="./images/img3.jpg" text="Triangular House"/>
      <Gallery source="./images/img4.jpg" text="Dog"/>
    </div>
  );
}

export default App;
