function convert() {
    var inrvalue = document.getElementById("converter").value;
    var exchangeRate = 0.012;
    var usdvalue = (inrvalue * exchangeRate).toFixed(2);
    document.getElementById("ans").innerHTML = `${inrvalue} Rupees = ` + usdvalue + ` dollar`;
}