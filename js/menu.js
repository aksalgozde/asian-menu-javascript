const menuItems = liste();
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Kategorileri belirle
const categories = ['All', ...new Set(menuItems.map(item => item.category))];

const displayMenuItems = (menuItems) => {
    sectionCenter.innerHTML = '';
    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
        div.innerHTML = `
            <img src="${item.img}" class="photo" />
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                    ${item.desc}
                </div>
            </div>
        `;
        sectionCenter.appendChild(div);
    });
};

displayMenuItems(menuItems);

categories.forEach(category => {
    const button = document.createElement('button');
    button.classList.add("btn", "btn-outline-dark", "btn-item");
    button.setAttribute("data-id", category);
    button.innerHTML = category;
    button.addEventListener('click', () => {
        const filteredMenuItems = category === "All" ? menuItems : menuItems.filter(item => item.category === category);
        displayMenuItems(filteredMenuItems);
    });
    btnContainer.appendChild(button);
});
