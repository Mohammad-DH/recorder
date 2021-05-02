var color = document.querySelectorAll('.color');
console.log(color)


const change = (e, el) => {

    color.forEach(element => {
        element.classList.remove('clicked')
    });
    el.classList.add('clicked')


    switch (e) {

        case 'color1':
            document.querySelector('body').classList.remove('color2', 'color3', 'color4', 'color5')
            document.querySelector('body').classList.add('color1')
            break;

        case 'color2':
            document.querySelector('body').classList.remove('color1', 'color3', 'color4', 'color5')
            document.querySelector('body').classList.add('color2')
            break;

        case 'color3':
            document.querySelector('body').classList.remove('color2', 'color1', 'color4', 'color5')
            document.querySelector('body').classList.add('color3')
            break;

        case 'color4':
            document.querySelector('body').classList.remove('color2', 'color3', 'color1', 'color5')
            document.querySelector('body').classList.add('color4')
            break;

        case 'color5':
            document.querySelector('body').classList.remove('color2', 'color3', 'color4', 'color1')
            document.querySelector('body').classList.add('color5')
            break;

        default:
            break;
    }

}


color.forEach(el => {
    el.addEventListener('click', () => change(el.classList[1], el))
});