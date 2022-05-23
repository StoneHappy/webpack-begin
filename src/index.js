import { ComponentService } from "./app/component.service"
import { AlertSerice } from "./app/alert.service"
let comp = new ComponentService;

let alerts = new AlertSerice;
alerts.hideErrors();

comp.setResult("asdasd");

alert("hello webpack");