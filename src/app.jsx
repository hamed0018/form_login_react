import Frm from "./FormSign";
import Frml from "./Formlogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return ( 
        <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frm/>}/>
        <Route path="/login" element={<Frml/>}/>
        
      </Routes>
    </BrowserRouter>
        </>
     );
}

export default App;



