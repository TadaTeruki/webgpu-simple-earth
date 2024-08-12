import init from "../pkg/chunks_graphics.js";
import { utils } from "./lib/utils.js";

window.onload = () => {
	init();
	console.log("loading...");
	const canvas = document.getElementById("main-canvas");
	utils.autoResizeCanvas(canvas);
};
