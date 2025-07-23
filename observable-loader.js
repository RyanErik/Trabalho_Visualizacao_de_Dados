import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/fbb99c3b8ad509ba.js?v=4";
import define2 from "https://api.observablehq.com/d/5cbb28335f38f36f.js?v=4";

const runtime = new Runtime();
const runtime2 = new Runtime();

runtime.module(define, name => {
  if (name === "viewof chartGrupo") return new Inspector(document.querySelector("#observablehq-viewof-chartGrupo-cf89fb02"));
  if (name === "mapa") return new Inspector(document.querySelector("#observablehq-mapa-cf89fb02"));
  if (name === "contagemPorBioma") return new Inspector(document.querySelector("#observablehq-contagemPorBioma-cf89fb02"));
  if (name === "mapaBioma") return new Inspector(document.querySelector("#observablehq-mapaBioma-cf89fb02"));
  if (name === "viewof chartBolhas") return new Inspector(document.querySelector("#observablehq-viewof-chartBolhas-cf89fb02"));
  return ["selected","grupoSelecionado","mapaBiomasFormatado","selectedBioma","biomaSelecionado","biomaSelecionadoNorm","biomasNaoSelecionados","biomaDestacado","camadaColorida","camadaCinza"].includes(name);
});

runtime2.module(define2, name => {
  if (name === "grafico") return new Inspector(document.querySelector("#observablehq-grafico-dbb91d51"));
});

window.addEventListener("load", () => {
  const containers = [
    "#observablehq-viewof-chartGrupo-cf89fb02",
    "#observablehq-mapa-cf89fb02",
    "#observablehq-viewof-chartBolhas-cf89fb02",
    "#observablehq-mapaBioma-cf89fb02",
    "#observablehq-grafico-dbb91d51"  
  ];
  containers.forEach(selector => {
    const container = document.querySelector(selector);
    if (container) {
      Array.from(container.children).forEach(child => {
        child.style.width = "100%";
        child.style.height = "100%";
        child.style.display = "block";
      });
    }
  });
});
