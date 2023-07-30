import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <div style={{background: "black"}}>
    <Navbar   title="TextUtils"/>
    <div className="container ,my-3">
    <TextForm heading="Enter the text to Analize" />
    </div> 
    </div>
  );
   
}

export default App;
