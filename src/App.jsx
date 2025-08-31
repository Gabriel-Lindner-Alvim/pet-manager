import Navbar from './components/Navbar.jsx';
import PetsPage from './Pages/PetsPage.jsx'
import { useState } from "react";
import PetDetailsModal from "./components/PetDetailsModal.jsx";

export default function App() {
  const [selectedPet, setSelectedPet] = useState(null);


  return (
    <div className="min-h-screen bg-base-200">    
    <Navbar />
    <PetsPage onViewPet={setSelectedPet} />

    {setSelectedPet && (
      <PetDetailsModal
        pet={selectedPet}
        onClose={() => setSelectedPet(null)}
        />
    )}
    </div>
  );
}

