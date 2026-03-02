let isVietnamese = true;

function toggleLanguage() {
    isVietnamese = !isVietnamese;
    
    // Tìm tất cả các thẻ có thuộc tính data-vi
    const elements = document.querySelectorAll('[data-vi]');
    const btn = document.getElementById('lang-btn');

    elements.forEach(el => {
        // Thay đổi nội dung dựa trên trạng thái hiện tại
        if (isVietnamese) {
            el.innerText = el.getAttribute('data-vi');
            btn.innerText = "English";
        } else {
            el.innerText = el.getAttribute('data-en');
            btn.innerText = "Tiếng Việt";
        }
    });

    // Lưu vào bộ nhớ trình duyệt
    localStorage.setItem('lang', isVietnamese ? 'vi' : 'en');
}

// Kiểm tra ngôn ngữ đã lưu khi mở trang
window.onload = () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
        toggleLanguage();
    }
};