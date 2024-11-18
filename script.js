document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('show');
});


function showLogin() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'flex';
    document.getElementById('loginBtn').classList.remove('active');
    document.getElementById('signupBtn').classList.add('active');
}


// إضافة JavaScript لتأخير الانتقال بعد 3 ثواني
setTimeout(function() {
    // إخفاء اللوجو بعد 3 ثواني
    document.querySelector('.logo-container').style.display = 'none';
}, 3000);


document.getElementById('startBtn').addEventListener('click', function() {
    // الوصول إلى الكاميرا فقط
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // الكاميرا تعمل بنجاح
            document.getElementById('status').textContent = "تم الوصول إلى الكاميرا بنجاح!";
            alert("تم الوصول إلى الكاميرا بنجاح!");
            
            // يمكنك إيقاف الكاميرا بعد الوصول إليها إذا أردت
            stream.getTracks().forEach(track => track.stop());
        })
        .catch(function(error) {
            // في حال حدوث خطأ
            document.getElementById('status').textContent = "حدث خطأ في الوصول إلى الكاميرا: " + error;
            alert('حدث خطأ في الوصول إلى الكاميرا: ' + error);
        });
});
