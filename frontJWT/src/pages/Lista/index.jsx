import api from "../../services/api";
import { useEffect, useState } from "react";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token"); // pega o token salvo
      try {
        const { data: { users } } = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAllUsers(users);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Lista de Usuários</h2>
      <ul className="space-y-4">
        {allUsers && allUsers.length > 0 && allUsers.map((user) => (
          <li key={user.id} className="border p-4 rounded-md shadow-sm">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
