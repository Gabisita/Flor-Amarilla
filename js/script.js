document.addEventListener("DOMContentLoaded", function() {
    const showButton = document.getElementById("showButton");
    const leaves = document.querySelectorAll(".leaf");
    const dot = document.querySelector(".dot");

    let currentIndex = 0;

    showButton.addEventListener("click", function() {
        function showNextLeaf() {
            if (currentIndex < leaves.length) {
                leaves[currentIndex].style.display = "block";
                currentIndex++;

                // Programar la aparición del próximo objeto después de un tiempo
                if (currentIndex < leaves.length) {
                    setTimeout(showNextLeaf, 200);
                } else {
                    // Cuando todos los objetos han aparecido, mostrar el punto
                    setTimeout(function() {
                        dot.style.display = "block";
                    }, 200);
                }
            }
        }

        // Comenzar la secuencia al hacer clic en el botón
        showNextLeaf();
    });
});
