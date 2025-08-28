import PetCard from "../components/Petcard.jsx";

const mockPets = [
    { id: 1, name: "Sakura", species: "Gato", breed: "Persa"},
    {id: 2, name: "Apolo", species: "Cachorro", breed: "Buldogue Francês"},
    {id: 3, name: "Milky", species: "Cachorro", breed: "Buldogue Francês"},
    {id: 4, name: "Marie", species: "Gato", breed: "Persa"},
];

function PetsPage() {
    return(
        <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Meus Pets</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPets.map(p => (
          <PetCard key={p.id} name={p.name} species={p.species} breed={p.breed} />
        ))}
      </div>
    </div>
  );
}

export default PetsPage;