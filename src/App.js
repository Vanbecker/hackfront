// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           teste
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContestPage from "./page/public/ContestPage"



function App() {
  return (
    <Router>

      <Routes>


        <Route path="/public/ContestPage" element={<ContestPage />} />

      </Routes>

    </Router >
  );
}

export default App;





