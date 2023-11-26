document.getElementById('btnSubmit2')
document.addEventListener('click', function(){
    let input = document.querySelector('[data-input]').value;
    let days = input * 365;
    document.querySelector('[data-output]').textContent = days;
});