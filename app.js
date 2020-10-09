var displayData, display, digitOne, digitTwo, operation, percent;
displayData = '';
digitOne = 0;
digitTwo = 0;

function addDigit(digit) {
    console.log('working?');
    if (displayData.length < 12) {
        displayData += digit;
        display.textContent = displayData;
    }
}
display = document.getElementById('display');
display.textContent = displayData;
document.getElementById('btn-1').addEventListener('click', function () {
    addDigit('1');
});

document.getElementById('btn-2').addEventListener('click', function () {
    addDigit('2');
});

document.getElementById('btn-3').addEventListener('click', function () {
    addDigit('3');
});

document.getElementById('btn-4').addEventListener('click', function () {
    addDigit('4');
});

document.getElementById('btn-5').addEventListener('click', function () {
    addDigit('5');
});

document.getElementById('btn-6').addEventListener('click', function () {
    addDigit('6');
});

document.getElementById('btn-7').addEventListener('click', function () {
    addDigit('7');
});

document.getElementById('btn-8').addEventListener('click', function () {
    addDigit('8');
});

document.getElementById('btn-9').addEventListener('click', function () {
    addDigit('9');
});

document.getElementById('btn-0').addEventListener('click', function () {
    if (displayData.length > 0) {
        addDigit('0');
    }
});

document.getElementById('btn-dot').addEventListener('click', function () {
    if (displayData.length > 0) {
        addDigit('.');
    }
});

document.getElementById('btn-b').addEventListener('click', function () {
    displayData = displayData.slice(0, -1);
    display.textContent = displayData;
});

document.getElementById('btn-c').addEventListener('click', function () {
    displayData = '';
    display.textContent = displayData;
});

document.getElementById('btn-p').addEventListener('click', function () {
    digitOne = parseFloat(displayData);
    operation = '+';
    displayData = ''
    display.textContent = displayData;
});

document.getElementById('btn-m').addEventListener('click', function () {
    digitOne = parseFloat(displayData);
    operation = '-';
    displayData = ''
    display.textContent = displayData;
});

document.getElementById('btn-mul').addEventListener('click', function () {
    digitOne = parseFloat(displayData);
    operation = '*';
    displayData = ''
    display.textContent = displayData;
});

document.getElementById('btn-d').addEventListener('click', function () {
    digitOne = parseFloat(displayData);
    operation = '/';
    displayData = ''
    display.textContent = displayData;
});

document.getElementById('btn-e').addEventListener('click', function () {
    digitTwo = parseFloat(displayData);
    if (operation === '+') {
        digitOne += digitTwo;
    } else if (operation === '-') {
        digitOne -= digitTwo;
    } else if (operation === '*') {
        digitOne *= digitTwo;
    } else if (operation === '/') {
        digitOne /= digitTwo;
    }
    displayData = digitOne.toString();
    display.textContent = displayData;
    digitOne = 0;
    digitTwo = 0;
    if (displayData.length > 12) {
        display.innerHTML = '<h5>' + displayData + '</h5>';
    }
});

document.getElementById('btn-per').addEventListener('click', function () {
    console.log('working??????');
    digitTwo = parseFloat(displayData);
    percent = (digitOne * digitTwo) / 100;
    if (operation === '+') {
        digitOne += percent;
    } else if (operation === '-') {
        digitOne -= percent;
    } else if (operation === '*') {
        digitOne *= percent;
    } else if (operation === '/') {
        digitOne /= percent;
    }
    displayData = digitOne.toString();
    display.textContent = displayData;
    digitOne = 0;
    digitTwo = 0;
    if (displayData.length > 12) {
        display.innerHTML = '<h5>' + displayData + '</h5>';
    }
});
