function submitForms() {
    if (document.getElementById('form1').checkValidity()) {
        document.getElementById('form1').submit();
    } else if (document.getElementById('form2').checkValidity()) {
        document.getElementById('form2').submit();
    } else {
        alert('sdwd');
    }
}
