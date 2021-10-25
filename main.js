/*menu show y hidden*/
const navMenu = document.getElementByID('nav_menu'),
    navToggle = document.getElementByID('nav_toggle'),
    navClose = document.getElementByID('nav_close)

        /*menu show*/
        if (navToogle) {
            navToggle.addEventListener('click', () => {
                navMenu.ClassList.add('show-menu')
            })
        }