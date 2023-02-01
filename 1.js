const num = Number.parseFloat(prompt("Введите температуру в градусах цельсия"));
alert(`Цельсий ${num}, Фаренгейт ${((9 / 5) * num + 32).toFixed(1)}`);