import "./App.css";
import BookingReservation from "./components/BookingForm";
import Home from "./components/Home";

function App() {
  return (
    <div className="App-header">
      <Home
        name="Little Lemon"
        description="A family-owned Mediterranean restaurant blending time-honored recipes with a modern flair. We serve authentic flavors made with love, in a warm and welcoming atmosphere."
      />
      <BookingReservation formInput />
    </div>
  );
}

export default App;
