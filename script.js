// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Añadir un event listener al botón
document.getElementById('colorButton').addEventListener('click', function() {
    const bgColor = getRandomColor();
    const textColor = getRandomColor();

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.getElementById('colorCode').textContent = `Color de fondo: ${bgColor}, Color de texto: ${textColor}`;
});