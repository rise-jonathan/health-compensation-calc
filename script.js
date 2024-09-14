// Function CalcCompensation 
function calculateCompensation() {
    const income = parseFloat(document.getElementById("income").value) || 0;  // Получаем доход
    const days = parseFloat(document.getElementById("days").value) || 0;  // Получаем количество дней на больничном
    const hasTubercolosis = document.getElementById("chbox").checked;  // Проверяем, есть ли туберкулез

    // Limits - days
    const maxDaysNormal = 182;
    const maxDaysTubercolosis = 240;

    // Rate
    const compensationRate = 0.7;

    // Days limits -depends on
    const maxDays = hasTubercolosis ? maxDaysTubercolosis : maxDaysNormal;

    // Check limits
    if (days > maxDays) {
        alert(`Maximum days: ${maxDays} дней.`);
        return;
    }

    // Calc - daily income
    const dailyIncome = (income * compensationRate) / 30;

    // Compensations - 
    const employerDays = Math.min(days, 8) - 3;
    const insuranceDays = days > 8 ? days - 8 : 0;

    // Validation - positive values
    const validEmployerDays = Math.max(employerDays, 0);
    const validInsuranceDays = Math.max(insuranceDays, 0);

    // Sum of compensations - employer + insurance
    const employerCompensation = validEmployerDays * dailyIncome;
    const insuranceCompensation = validInsuranceDays * dailyIncome;
    const totalCompensation = employerCompensation + insuranceCompensation;

    // Update UI elements - compensations, total days, daily income, etc.
    document.getElementById("employerDays").textContent = validEmployerDays;
    document.getElementById("sumEmp").textContent = employerCompensation.toFixed(2);
    document.getElementById("insuranceDays").textContent = validInsuranceDays;
    document.getElementById("sumIns").textContent = insuranceCompensation.toFixed(2);
    document.getElementById("totalSum").textContent = totalCompensation.toFixed(2);
    document.querySelector(".totalDays").textContent = days;
    document.getElementById("perDay").textContent = dailyIncome.toFixed(2);
    document.getElementById("perDayIn").textContent = dailyIncome.toFixed(2);
}

// Add event listener to calculate button - click event
document.getElementById("calc").addEventListener("click", function () {
    calculateCompensation();
});




