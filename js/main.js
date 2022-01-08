const u = document.querySelector.bind(document);
const uu = document.querySelectorAll.bind(document);

// loaij bỏ sụ kiện fourc

var ulElement = document.querySelector('.header__search-history');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

const logOut = u('.app__header-options')
//  NOTE
logOut.onclick = function(e) {
    e.stopPropagation();
    logOut.classList.add('active')
    
    u('.app').onclick = function() {
        u('.app__header-options').classList.remove('active')
    }
}

// chức năng hiện message (chức năng chưa phát triển)
function toast({
    title = '',
    message = '',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    
    if(main) {
        const toast = document.createElement('div');
     // AUto remove toaast
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, 5000)

        toast.onclick = function(e) {
            console.log(e.target)
            if(e.target.closest('.node__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove)
            }
        }
        
        toast.classList.add('app__node');
        toast.style.animation = `slideIn ease-in 0.3s, slideOut linear 1s 4s forwards`;
        toast.innerHTML =`
            <div class="node__icon">
                <i class="far fa-bell"></i>
            </div>
            <div class="node__title">
                <h3 class="node__title-node">${title}</h3>
                <p class="node__title-conten">
                    ${message}
                </p>
            </div>
            <div class="node__close">
                <i class="fas fa-times node__close-icon"></i>
            </div>              
         `;
        main.appendChild(toast);
    }
}

// toast({
//     title: 'Thông Báo',
//     message: 'Tính năng này hiện đang được cập nhật. Bạn vui lòng thông cảm',  
// })

function show() {
    toast({
        title: 'Thông Báo',
        message: 'Tính năng này hiện đang được cập nhật. Bạn vui lòng thông cảm',  
    })
}
    
// MỞ RỘNG SIDABAR TRÊN TAPLET
const sidebarBtn = document.querySelector('.sidebar__expand')
const openSidebar = document.querySelector('.open--sidebar')
const closeSidebar = document.querySelector('.close--sidebar')
const styleSidebar = document.querySelector('.app__sidebar')
const itemSidebar = document.querySelectorAll('.hide-on-tablet')



openSidebar.onclick = function() {
    styleSidebar.classList.add('sidebar--expand')
    openSidebar.style.display = 'none'
    document.querySelector('.sidebar__nav-label').style.display = 'block'
    Object.assign(closeSidebar.style, {
        display: 'block',
        float: 'right',
    })
    for(var i = 0; i < itemSidebar.length; i++) {
        itemSidebar[i].style.display = 'block'
    }
}

closeSidebar.onclick = function() {
    styleSidebar.classList.remove('sidebar--expand')
    openSidebar.style.display = 'block'
    document.querySelector('.sidebar__nav-label').style.display = 'none'
    closeSidebar.style.display = 'none'
    for(var i = 0; i < itemSidebar.length; i++) {
        itemSidebar[i].style.display = 'none'
    }
}

// Tab UI mục Cá Nhân



const tabUis = uu('.ui__list-item')
const tabContens = uu('.tab--item')

tabUis.forEach((tabUi, index) => {
    const tabConten = tabContens[index];

    tabUi.onclick =function() {
        u('.ui__list-item.active').classList.remove('active')
        u('.tab--item.active').classList.remove('active')

        this.classList.add('active')
        tabConten.classList.add('active')
    }
})

// Tab UI-ITEM APP__SIDEBAR
const sidebarUis = uu('.sidebar__nav-item')
const tabItems = uu('.app__')

sidebarUis.forEach((sidebarUi, index) => {
    sidebarUi.onclick = function(e) {
        e.preventDefault();
        const tabItem = tabItems[index];

        
        if(index >= 0 && index <= 4) {
            u('.sidebar__nav-item.active').classList.remove('active')      
            u('.app__.active').classList.remove('active')
            
            sidebarUi.classList.add('active')
            tabItem.classList.add('active')
        } else {
            e.preventDefault();
            show();
        }
    }
})