export default function VagasPage() {
  const vagasData = [
    {
      id: 1,
      titulo: "Atendente de Vendas",
      departamento: "Comercial",
      dataCriacao: "2025-10-01",
      status: "Aberta",
    },
    {
      id: 2,
      titulo: "Analista de RH",
      departamento: "Recursos Humanos",
      dataCriacao: "2025-09-28",
      status: "Em andamento",
    },
    {
      id: 3,
      titulo: "Gerente de Projetos",
      departamento: "Operações",
      dataCriacao: "2025-09-20",
      status: "Finalizada",
    },
    {
      id: 4,
      titulo: "Estagiário de Marketing",
      departamento: "Marketing",
      dataCriacao: "2025-09-15",
      status: "Pendente",
    },
    {
      id: 5,
      titulo: "Suporte Técnico",
      departamento: "Técnico",
      dataCriacao: "2025-09-10",
      status: "Cancelada",
    },
  ];

  return (
    <section className="flex h-full flex-col gap-4 p-4">
      {/* Cabeçalho */}
 

      {/* Cards de Métricas */}
      <div className="flex flex-wrap gap-4">
        <div className="rounded-xl bg-sky-100 p-4 w-40 text-center">
          <p className="text-sm font-medium">Abertas</p>
          <p className="text-2xl font-bold text-sky-600">
            {vagasData.filter((v) => v.status === "Aberta").length}
          </p>
        </div>
        <div className="rounded-xl bg-blue-100 p-4 w-40 text-center">
          <p className="text-sm font-medium">Em andamento</p>
          <p className="text-2xl font-bold text-blue-600">
            {vagasData.filter((v) => v.status === "Em andamento").length}
          </p>
        </div>
        <div className="rounded-xl bg-yellow-100 p-4 w-40 text-center">
          <p className="text-sm font-medium">Pendentes</p>
          <p className="text-2xl font-bold text-yellow-600">
            {vagasData.filter((v) => v.status === "Pendente").length}
          </p>
        </div>
        <div className="rounded-xl bg-green-100 p-4 w-40 text-center">
          <p className="text-sm font-medium">Finalizadas</p>
          <p className="text-2xl font-bold text-green-600">
            {vagasData.filter((v) => v.status === "Finalizada").length}
          </p>
        </div>
        <div className="rounded-xl bg-red-100 p-4 w-40 text-center">
          <p className="text-sm font-medium">Canceladas</p>
          <p className="text-2xl font-bold text-red-600">
            {vagasData.filter((v) => v.status === "Cancelada").length}
          </p>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Função</th>
              <th className="px-4 py-2">Departamento</th>
              <th className="px-4 py-2">Criada em</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vagasData.map((vaga) => (
              <tr key={vaga.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{vaga.id}</td>
                <td className="px-4 py-2">{vaga.titulo}</td>
                <td className="px-4 py-2">{vaga.departamento}</td>
                <td className="px-4 py-2">{vaga.dataCriacao}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white
                      ${
                        vaga.status === "Aberta"
                          ? "bg-sky-400"
                          : vaga.status === "Em andamento"
                          ? "bg-blue-600"
                          : vaga.status === "Pendente"
                          ? "bg-yellow-500"
                          : vaga.status === "Finalizada"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }
                    `}
                  >
                    {vaga.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
