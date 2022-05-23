export class AlertSerice {
    constructor() {
        this.errorBox = document.getElementById("error");
    }

    hideErrors() {
        this.errorBox.classList.add("invisible");
    }
}