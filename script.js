


// Функция для вычисления корней квадратного уравнения
function calculateQuadraticRoots() {
    const a = document.getElementById('a-coef').value;
    const b = document.getElementById('b-coef').value;
    const c = document.getElementById('c-coef').value;
    const resultElement = document.getElementById('quadratic-roots-result');
  
    let result;
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      result = `Корни уравнения: ${root1} и ${root2}`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      result = `Уравнение имеет один корень: ${root}`;
    } else {
      result = 'Корней нет';
    }
  
    resultElement.textContent = result;
  }
  
  // Функция для проверки теоремы Пифагора
  function checkPythagorean() {
    const side1 = document.getElementById('side1').value;
    const side2 = document.getElementById('side2').value;
    const side3 = document.getElementById('side3').value;
    const resultElement = document.getElementById('pythagorean-result');
  
    const isPythagorean = side1 * side1 + side2 * side2 === side3 * side3 ||
                          side1 * side1 + side3 * side3 === side2 * side2 ||
                          side2 * side2 + side3 * side3 === side1 * side1;
  
    resultElement.textContent = isPythagorean ? 'Треугольник является прямоугольным' : 'Треугольник не является прямоугольным';
  }
  
  // Функция для нахождения общих делителей
  function findDivisors() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultElement = document.getElementById('divisors-result');
  
    const divisors = [];
    for (let i = 1; i <= Math.min(number1, number2); i++) {
      if (number1 % i === 0 && number2 % i === 0) {
        divisors.push(i);
      }
    }
  
    resultElement.textContent = `Общие делители: ${divisors.join(', ')}`;
  }
  
  // Функция для вычисления НОД
  function calculateGCD() {
    let number1 = document.getElementById('gcd-number1').value;
    let number2 = document.getElementById('gcd-number2').value;
    const resultElement = document.getElementById('gcd-result');
  
    while (number2 !== 0) {
      let temp = number2;
      number2 = number1 % number2;
      number1 = temp;
    }
  
    resultElement.textContent = `Наибольший общий делитель: ${number1}`;
  }
  
  // Функция для вычисления НОК
  function calculateLCM() {
    const number1 = document.getElementById('lcm-number1').value;
    const number2 = document.getElementById('lcm-number2').value;
    const resultElement = document.getElementById('lcm-result');
  
    const gcd = (a, b) => {
      return b ? gcd(b, a % b) : a;
    };
  
    const lcm = (number1 * number2) / gcd(number1, number2);
  
    resultElement.textContent = `Наименьшее общее кратное: ${lcm}`;
  }
  
  
  