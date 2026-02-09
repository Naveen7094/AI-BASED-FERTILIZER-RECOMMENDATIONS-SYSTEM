function recommendFertilizer() {
    let n = parseInt(document.getElementById("n").value);
    let p = parseInt(document.getElementById("p").value);
    let k = parseInt(document.getElementById("k").value);
    let crop = document.getElementById("crop").value;

    let result = "";

    if (isNaN(n) || isNaN(p) || isNaN(k) || crop === "") {
        document.getElementById("result").innerHTML = "❌ Please fill all fields";
        return;
    }

    // AI Rule-Based Logic
    if (n < 50) {
        result = "Urea (High Nitrogen Fertilizer)";
    } 
    else if (p < 40) {
        result = "DAP (High Phosphorus Fertilizer)";
    } 
    else if (k < 40) {
        result = "Potash (High Potassium Fertilizer)";
    } 
    else {
        result = "Balanced NPK Fertilizer";
    }

    // Crop-based adjustment
    if (crop === "rice") {
        result += " – Suitable for Rice";
    } 
    else if (crop === "wheat") {
        result += " – Suitable for Wheat";
    }
    else if (crop === "maize") {
        result += " – Suitable for Maize";
    }
    else if (crop === "cotton") {
        result += " – Suitable for Cotton";
    }
    else if (crop === "sugarcane") {
        result += " – Suitable for Sugarcane";
    }

    document.getElementById("result").innerHTML = "✅ Recommended Fertilizer: <br>" + result;
}
