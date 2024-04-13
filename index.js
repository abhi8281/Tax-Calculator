$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

function validateInputs() {
    // Hide all error icons initially
    $('.error-icon').hide();

    // Check if any input is empty
    var isValid = true;
    $('.form-control').each(function() {
        if ($(this).val() === '') {
            $(this).next('.error-icon').show();
            isValid = false;
        }
    });

    if (!isValid) {
        return;
    }

    // Proceed with calculations
    calculateTax();
    $('.container').addClass('submitted');
}

function calculateTax() {
    var grossIncome = parseFloat($('#grossIncome').val());
    var extraIncome = parseFloat($('#extraIncome').val());
    var ageGroup = $('#ageGroup').val();
    var deductions = parseFloat($('#deductions').val());

    var totalIncome = grossIncome + extraIncome - deductions;
    var tax = 0;

    if (totalIncome > 800000) {
        var taxableIncome = totalIncome - 800000;

        if (ageGroup === "<40") {
            tax = 0.3 * taxableIncome;
        } else if (ageGroup === ">=40 <60") {
            tax = 0.4 * taxableIncome;
        } else if (ageGroup === ">=60") {
            tax = 0.1 * taxableIncome;
        }
    }else{
        
        var formattedTax = (totalIncome / 100000) + " lakhs";
        $('#resultText').text('Overall Income (After Deductions): ' + formattedTax).addClass('result-styled');
        $('#resultModal').modal('show');
        return;
    }

     
     var formattedTax = (tax / 100000) + " lakhs";

     
     $('#resultText').text('Overall Income (After Deductions): ' + formattedTax).addClass('result-styled');

   
    $('#resultModal').modal('show');
}


$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
  });