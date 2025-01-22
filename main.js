
let rang = prompt("Qanday rang tanlaysiz? (masalan: red, blue, yellow, )");


if (rang) {

    document.body.style.margin = "0";
    document.body.style.height = "100vh"; 
    document.body.style.backgroundColor = rang; 
} else {
    alert("Rang kiritilmadi yoki noto'g'ri qiymat!");
}
