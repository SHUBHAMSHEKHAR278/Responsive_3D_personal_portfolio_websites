const resumeLists = decument.querySelectorAll('.resume-list');
const resumeBoxs = decument.querySelectorAll('.resume-box');

const portfolioLists = decument.querySelectorAll('.portfolio-list');
const portfolioBoxs = decument.querySelectorAll('.portfolio-box');
// navbar actions and all section actions along with cube rotation when navbar is clicked
// resume section when clicking tab-list

resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});

// visibility for contact section when reloading (cube reloading animation)