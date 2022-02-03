var table = document.getElementsByClassName("table")[0]
var tableContent = ""

for(let i = 0; i < 100; i++){
    tableContent += '<div class="tableRow"><div class="tableCell">1</div><div class="tableCell">2021</div><div class="tableCell">6</div><div class="tableCell">IIT-Delhi</div><div class="tableCell">Textile Technology</div><div class="tableCell">4 Years</div><div class="tableCell">B.Tech</div><div class="tableCell">GEN</div><div class="tableCell">Female-Only</div><div class="tableCell">9333</div><div class="tableCell">11287</div></div>'
}

table.innerHTML = tableContent