// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
            amigos.push(nombre);
            input.value = "";
            mostrarLista();
        }

        function mostrarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("No hay nombres en la lista para sortear.");
                return;
            }
            let indice = Math.floor(Math.random() * amigos.length);
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
        }