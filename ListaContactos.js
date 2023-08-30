let contactList = [
  {
    id: 1,
    nombre: "JuanC",
    apellido: "Uribe",
    edad: "29",
    celular: "3012310955",
    ubicacion: {
      ciudad: "Medellin",
      direccion: "Carrera 49 Acevedo",
    },
  },
  {
    id: 2,
    nombre: "Angelis",
    apellido: "Gutierrez",
    edad: "19",
    celular: "3105454332",
    ubicacion: {
      ciudad: "Taraza",
      direccion: "Carrera 33 Pavas",
    },
  },
];

function agregarContacto(contactoNuevo) {
  contactList.push(contactoNuevo);
}

function eliminarContacto(contactoAEliminar) {
  contactList = contactList.filter(
    (contacto) => contacto.id !== contactoAEliminar
  );
}

function actualizarContacto(contactoAActualizar) {
  let indice = contactList.findIndex(
    (contacto) => contacto.id === contactoAActualizar.id
  );

  if (indice !== -1) {
    contactList[indice].nombre = contactoAActualizar.nombre;
    contactList[indice].apellido = contactoAActualizar.apellido;
    contactList[indice].ubicacion = contactoAActualizar.ubicacion;
  }
}

function imprimirListaDeContactos() {
  console.table(contactList);
}

let contactoNuevo = {
  id: 3,
  nombre: "Karen",
  apellido: "Rodriguez",
  edad: "33",
  celular: "3154920404",
  ubicacion: {
    ciudad: "Bogota",
    direccion: "Parque centro int 290",
  },
};

let contactoActualizado = {
  id: 1,
  nombre: "Alejandro",
  apellido: "Magno",
  edad: "100",
  celular: "Na",
  ubicacion: {
    ciudad: "Bucaramanga",
    direccion: "Calle 29 los alpes",
  },
};

// Ejecutar funciones y mostrar resultados
// agregarContacto(contactoNuevo);
// eliminarContacto(2);
// actualizarContacto(contactoActualizado);
// imprimirListaDeContactos();

agregarContacto(contactoNuevo);
eliminarContacto(2);
actualizarContacto(contactoActualizado);
imprimirListaDeContactos();
