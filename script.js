/* document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  const closeMenuBtn = document.querySelector('.close-menu');
  const body = document.body;

  function toggleMenu() {
    mainMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
  }

  // เปิด-ปิดเมนูเมื่อคลิกปุ่ม toggle
  menuToggle.addEventListener('click', toggleMenu);

  // ปิดเมนูเมื่อคลิกปุ่มปิดภายในเมนู
  closeMenuBtn.addEventListener('click', toggleMenu);

  // ปิดเมนูเมื่อคลิกพื้นที่ด้านนอกเมนู
  document.addEventListener('click', (event) => {
    // ตรวจสอบว่าคลิกนอกเมนูและปุ่ม toggle
    const isClickInsideMenu = mainMenu.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideToggle && mainMenu.classList.contains('active')) {
      toggleMenu();
    }
  }); */

  // ปิดเมนูเมื่อมีการกดปุ่ม Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
});
