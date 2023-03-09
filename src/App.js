import './App.css';
import Navbar from './Components/Navbar'
// import Alert from './Components/Alert'
import Textform from './Components/Textform';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
export const Error = () => {
  <h1>OOPS WE COULD NOT WORK ON YOUR REQUEST</h1>
}
function App() {
  return (
    <>
      {/* <Router> */}

      <Navbar />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Navbar title="title" /> */}
        {/* <Route path="/" element={<Navbar />}>

        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/textform" element={<Textform />}>
        </Route>
        <Route element={<Error />}></Route> */}
        {/* </Routes> */}
        {/* <Alert alert ={alert}/> */}
        {/* <About /> */}
        <Textform />
      </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
