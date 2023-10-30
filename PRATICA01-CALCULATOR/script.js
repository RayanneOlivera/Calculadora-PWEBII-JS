let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = [''];

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    updateScreen();
    resetStyles();
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
            if (btn.value === '.') {
                // Verificar se a entrada atual já contém um ponto decimal
                if (realTimeScreenValue[realTimeScreenValue.length - 1].includes('.')) {
                    return;
                }
            }
            realTimeScreenValuePush(btn.value);
            updateScreen();
        }

        if (btn.id === 'clear') {
            realTimeScreenValue = [''];
            updateScreen();
        }

        if (btn.id === 'evaluate') {
            evaluateExpression();
        }
    });
});

function realTimeScreenValuePush(value) {
    realTimeScreenValue[realTimeScreenValue.length - 1] += value;
}

function updateScreen() {
    currentInput.innerHTML = realTimeScreenValue.join('');
}

function evaluateExpression() {
    let result = 0;
    try {
        result = eval(realTimeScreenValue.join(''));
        // Atualiza a entrada para o resultado
        realTimeScreenValue = [result.toString()]; 
        //Exibe o resultado na tela principal
        currentInput.innerHTML = result; // 
    } catch (error) {
        result = 'Erro';
    }
    answerScreen.innerHTML = ''; // Limpa a tela de visualização
}

function resetStyles() {
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
}
