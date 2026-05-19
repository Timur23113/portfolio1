// Мобильное меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
 navLinks.classList.toggle('active');
});

// Модальные окна для проектов
function openModal(id) {
 document.getElementById(id).classList.add('active');
 document.body.style.overflow = 'hidden';
}
function closeModal(id) {
 document.getElementById(id).classList.remove('active');
 document.body.style.overflow = 'auto';
}
// Закрытие по клику вне модального окна
document.querySelectorAll('.modal').forEach(modal => {
 modal.addEventListener('click', (e) => {
 if (e.target === modal) closeModal(modal.id);
});
});
