// Carrusel de imagenes
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrusel img');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
}

// Mover el carrusel automáticamente cada 3 segundos (opcional)
setInterval(() => {
    moveSlide(1);
}, 3000);





// Muestra el botón para volver arriba cuando se baja en la página
window.onscroll = function() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Función para volver arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}







function toggleSalaReunion() {
    const salaReunionBox = document.getElementById("salaReunionBox");
    salaReunionBox.style.display = (salaReunionBox.style.display === "none" || salaReunionBox.style.display === "") ? "block" : "none";
}
















// Comentarios
let selectedStars = 0;  // Variable para almacenar la calificación seleccionada

// Función para enviar el comentario
function submitComment() {
    var name = document.getElementById("commentName").value;
    var text = document.getElementById("commentText").value;
    var rating = selectedStars; // Obtener la calificación seleccionada
    var commentsList = document.getElementById("commentsList");

    if (name && text && rating) {
        var commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");

        // Nombre del usuario
        var commentName = document.createElement("span");
        commentName.innerText = name;
        commentItem.appendChild(commentName);

        // Hora del comentario
        var timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        timestamp.innerText = new Date().toLocaleString();
        commentItem.appendChild(timestamp);

        // Texto del comentario
        var commentText = document.createElement("p");
        commentText.innerText = text;
        commentItem.appendChild(commentText);

        // Valoración con estrellas
        var commentRating = document.createElement("p");
        commentRating.innerHTML = "Valoración: " + generateStars(rating);
        commentItem.appendChild(commentRating);

        // Añadir el comentario a la lista
        commentsList.appendChild(commentItem);

        // Limpiar los campos
        document.getElementById("commentName").value = "";
        document.getElementById("commentText").value = "";
        resetStars();  // Restablecer las estrellas
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para generar las estrellas en base al valor de la calificación
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "⭐";  // Generar las estrellas de acuerdo a la calificación
    }
    return stars;
}

// Función para manejar la selección de estrellas
document.querySelectorAll('.comment-form .star').forEach(star => {
    star.addEventListener('click', function() {
        selectedStars = parseInt(star.getAttribute('data-value'));
        updateStars();  // Actualizar las estrellas visualmente
    });

    star.addEventListener('mouseover', function() {
        let currentStarValue = parseInt(star.getAttribute('data-value'));
        highlightStars(currentStarValue);  // Resaltar las estrellas al pasar el mouse
    });

    star.addEventListener('mouseout', function() {
        updateStars();  // Restablecer la visualización de las estrellas
    });
});

// Resalta las estrellas cuando se pasa el ratón por encima
function highlightStars(starValue) {
    document.querySelectorAll('.comment-form .star').forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= starValue) {
            star.style.color = '#f39c12';  // Color dorado
        } else {
            star.style.color = '#ccc';  // Color gris
        }
    });
}

// Actualiza el color de las estrellas según la selección
function updateStars() {
    document.querySelectorAll('.comment-form .star').forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= selectedStars) {
            star.style.color = '#f39c12';  // Color dorado
        } else {
            star.style.color = '#ccc';  // Color gris
        }
    });
}

// Restablece las estrellas a su estado inicial (gris)
function resetStars() {
    document.querySelectorAll('.comment-form .star').forEach(star => {
        star.style.color = '#ccc';  // Color gris
    });
}




