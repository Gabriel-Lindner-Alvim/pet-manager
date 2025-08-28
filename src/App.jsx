export default function App() {
  return (
    <div className="min-h-screen bg-base-200">    
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🐾 Pet Manager</a>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

       <div className="p-6 flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Bem-vindo!</h2>
            <p>Gerencie seus pets, vacinas, remédios e muito mais.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Adicionar Pet</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

