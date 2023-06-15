const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, altaFecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = window.confirm("Deseas eliminar este paciente");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-6 bg-white shadow-md px-6 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal normal-case">{altaFecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-slate-700 uppercase text-white font-bold rounded-lg mt-1"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-orange-500 uppercase text-white font-bold rounded-lg mt-2"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
