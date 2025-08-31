function PetDetailsModal({ pet, onClose }) {
    if (!pet) return null; // evita acessar pet.name quando pet é null

  const { name = "", species = "" } = pet;
  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Perfil de {pet.name}</h3>
          <button className="btn btn-sm" onClick={onClose}>Fechar</button>
        </div>

        {/* Abas simples com DaisyUI */}
        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Perfil" defaultChecked />
          <div role="tabpanel" className="tab-content p-4">
            {/* Perfil básico */}
            <div className="space-y-2">
              <div><span className="font-semibold">Espécie:</span> {pet.species}</div>
              {/* acrescentar nascimento, observações, etc. */}
            </div>
          </div>

          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Vacinas" />
          <div role="tabpanel" className="tab-content p-4">
            {/* Lista de vacinas + botão Adicionar */}
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Vacinas</h4>
              <button className="btn btn-sm btn-primary">Adicionar</button>
            </div>
            <p className="opacity-70 text-sm">Nenhuma vacina cadastrada.</p>
          </div>

          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Remédios" />
          <div role="tabpanel" className="tab-content p-4">
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Remédios</h4>
              <button className="btn btn-sm btn-primary">Adicionar</button>
            </div>
            <p className="opacity-70 text-sm">Nenhum plano de medicação.</p>
          </div>

          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Peso" />
          <div role="tabpanel" className="tab-content p-4">
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Peso</h4>
              <button className="btn btn-sm btn-primary">Adicionar</button>
            </div>
            <p className="opacity-70 text-sm">Nenhuma medição registrada.</p>
          </div>

          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Consultas" />
          <div role="tabpanel" className="tab-content p-4">
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Consultas</h4>
              <button className="btn btn-sm btn-primary">Adicionar</button>
            </div>
            <p className="opacity-70 text-sm">Nenhuma consulta cadastrada.</p>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}

export default PetDetailsModal;