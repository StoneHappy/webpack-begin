export class ComponentService {
    constructor() {
        this.numberOnInpu = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValuesButton = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    getInputs() {
        return [ this.numberOnInpu.value, this.numberTwoInput.value ];
    }

    setResult(str) {
        this.resultDiv.innerText = str;
    }

    onClick(cb) {
        this.addValuesButton.addEventListener("click", cb);
    }
}