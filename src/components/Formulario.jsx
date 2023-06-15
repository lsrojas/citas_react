import { useEffect, useState } from "react";
import React from "react";
import Errores from "./Errores";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [altaFecha, setAltaFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAltaFecha(paciente.altaFecha);
      setSintomas(paciente.sintomas);
    } else {
      console.log("no hay paciente");
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([nombre, propietario, email, altaFecha, sintomas].includes("")) {
      console.log("hay un campo vacio");

      setError(true);
      return;
    }
    setError(false);

    //se genera objeto de pacientes
    const objectoPaciente = {
      nombre,
      propietario,
      email,
      altaFecha,
      sintomas,
    };
    if (paciente.id) {
      //editando registro
      objectoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteSate) =>
        pacienteSate.id === paciente.id ? objectoPaciente : pacienteSate
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //nuevo registro
      objectoPaciente.id = generarId();
      setPacientes([...pacientes, objectoPaciente]);
    }

    // se resetea formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setAltaFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 -ml-20">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añadir paciente y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-6"
        onSubmit={handleSubmit}
      >
        {error && <Errores>Todos los campos son necesarios!</Errores>}

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Nombre De La Mascota
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="nombre de la mascota"
            className="border-2
          w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Nombre Del Propietario
          </label>
          <input
            type="text"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="nombre del propietario"
            className="border-2
          w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo de contacto"
            className="border-2
          w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            type="date"
            value={altaFecha}
            onChange={(e) => setAltaFecha(e.target.value)}
            className="border-2
          w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            type="text"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2
          w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Decribe sintomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
