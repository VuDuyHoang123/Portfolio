var typed = new Typed('#typed', {
    strings: [
        'Data Analytics || Data Managemen || Web Application Developer'
    ],
    typeSpeed: 50,    // Tốc độ gõ (50-60 là vừa đẹp)
    loop: false,      // Quan trọng: Tắt vòng lặp để gõ xong là dừng
    showCursor: true, // Hiện con trỏ để tạo cảm giác đang gõ
    cursorChar: '|',
    onComplete: (self) => {
        // Tùy chọn: Sau khi gõ xong 2 giây thì ẩn con trỏ đi cho sạch giao diện
        setTimeout(() => {
            self.cursor.style.display = 'none';
        }, 2000);
    }
});