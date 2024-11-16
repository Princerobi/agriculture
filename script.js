document.addEventListener('DOMContentLoaded', function() {
    const farmerBtn = document.getElementById('farmer-btn');
    const landownerBtn = document.getElementById('landowner-btn');

    farmerBtn.addEventListener('click', function() {
        window.location.href = 'fo.html';
    });

    landownerBtn.addEventListener('click', function() {
        window.location.href = 'lo.html';
    });
});