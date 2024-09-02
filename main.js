document.addEventListener('DOMContentLoaded', function () {
    const donateBtn = document.querySelector('.btn-primary');
    
    donateBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.container.my-5').scrollIntoView({ behavior: 'smooth' });
    });
});

