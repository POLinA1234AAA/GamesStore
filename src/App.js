import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/Header/Header";
import GamePage from "./pages/game-page/GamePage";
import OrderPage from "./pages/order-page/OrderPage";

function App() {

  return (
      <Provider store={store} >
        <Router basename='GamesStore'>
          <div className="App">
            <Header/>
            <Routes>
              <Route exact  path="/" element={<HomePage />} />
              <Route path="/app/:title" element={< GamePage/>}/>
              <Route path="/order" element={< OrderPage/>} />
            </Routes>
          </div>
        </Router>
      </Provider>
  );
}


export default App;