function convert() {
    let celsius = document.getElementById("celsius").value.trim();
    let fahrenheitField = document.getElementById("fahrenheit");
    let calcField = document.getElementById("calculation");

    if (celsius === "" || isNaN(celsius)) {
        alert("Masukkan angka yang valid untuk Celsius!");
        return;
    }

    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    fahrenheitField.value = fahrenheit.toFixed(1);
    calcField.value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(1)}°F`;
}

function reverse() {
    let fahrenheit = document.getElementById("fahrenheit").value.trim();
    let celsiusField = document.getElementById("celsius");
    let calcField = document.getElementById("calculation");

    if (fahrenheit === "" || isNaN(fahrenheit)) {
        alert("Masukkan angka yang valid untuk Fahrenheit!");
        return;
    }

    let celsius = (parseFloat(fahrenheit) - 32) * 5/9;
    celsiusField.value = celsius.toFixed(1);
    calcField.value = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(1)}°C`;
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

