const CampoNum1=document.getElementById('num1');
const CampoNum2=document.getElementById('num2');
const BotonSumar=document.getElementById('btn-sumar');
const ElementoResultado=document.getElementById('resultado');

function RealizarSuma(){
let valor1=CampoNum1.value;
let valor2=CampoNum2.value;

const numero1=parseFloat(valor1)
const numero2=parseFloat(valor2)

const sumatotal=numero1+numero2;

ElementoResultado.textContent=sumatotal;
}

console.log('Sumando ${numero1} + ${numero2} = ${sumatotal}');
BotonSumar.addEventListener('click', RealizarSuma);

