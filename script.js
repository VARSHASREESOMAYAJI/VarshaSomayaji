document.getElementById('guestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('guestForm').style.display = 'none';
    document.getElementById('thankYouMsg').style.display = 'block';
});
