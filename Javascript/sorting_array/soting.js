const form = document.getElementById("inputForm");
        const inputArrayField = document.getElementById("inputArray");
        const outputField = document.getElementById("output");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const userInput = inputArrayField.value;
            const inputArray = userInput.split(",").map(Number);
            inputArray.sort(function (a, b) {
                return b - a;
            });
            outputField.textContent = "Sorted Array (Descending Order): " +"["+inputArray.join(", ")+"]";
        });