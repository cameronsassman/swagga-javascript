function genders(a, b) {
    y = parseFloat(document.getElementById("quantity").value);
    var answer = document.getElementById("ftotalpr");
    answer.value = 150.95 * y;
    x = parseFloat(document.getElementById("quantity2").value);
    var answer1 = document.getElementById("mtotalpr");
    answer1.value = 180.95 * x;
    a = parseFloat(document.getElementById("ftotalpr").value);
    b = parseFloat(document.getElementById("mtotalpr").value);
    var answer2 = document.getElementById("total");
    answer2.value = a + b;
    }


