function handleCredentialResponse(response) {
  // محاكاة تحقق من بيانات Google OAuth
  const user = parseJwt(response.credential);
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.querySelector('#dashboard h2').innerText = `أهلاً ${user.name} 👋`;
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(base64);
}

function showSection(section) {
  const content = document.getElementById('content');
  switch (section) {
    case 'journal':
      content.innerHTML = '<h3>قيود اليومية</h3><p>هنا يمكنك تسجيل القيود اليومية.</p>';
      break;
    case 'ledger':
      content.innerHTML = '<h3>دفتر الأستاذ العام</h3><p>عرض كافة الحسابات وحركاتها.</p>';
      break;
    case 'trial-balance':
      content.innerHTML = '<h3>ميزان المراجعة</h3><p>عرض الأرصدة والعمليات المجملة.</p>';
      break;
    case 'financial-statements':
      content.innerHTML = '<h3>القوائم المالية</h3><p>قائمة المركز المالي وقائمة الدخل وقائمة حقوق الملكية.</p>';
      break;
    default:
      content.innerHTML = '<p>اختر أحد الأقسام لعرض محتواه.</p>';
  }
}

function logout() {
  location.reload(); // إعادة تحميل الصفحة لإرجاع المستخدم إلى صفحة الدخول
}
