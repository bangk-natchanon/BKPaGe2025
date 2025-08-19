document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');

    // ฟังก์ชันสำหรับเปิด/ปิดเมนู
    function toggleMenu() {
        menuOverlay.classList.toggle('is-active');
    }

    // เมื่อคลิกที่ปุ่มแฮมเบอร์เกอร์ ให้เปิด/ปิดเมนู
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // หยุดการส่ง event ไปยัง element อื่น
        toggleMenu();
    });

    // เมื่อคลิกที่เมนูหรือลิงก์ในเมนู ให้ปิดเมนู
    menuOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('menu-overlay') || event.target.closest('.menu-link')) {
            toggleMenu();
        }
    });

    // เมื่อกดปุ่ม Esc ให้ปิดเมนู
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuOverlay.classList.contains('is-active')) {
            toggleMenu();
        }
    });
});