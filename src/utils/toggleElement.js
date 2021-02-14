const toggleElement = (element) => {
    if (element.classList.contains('active'))
            element.classList.remove('active');
        else
            element.classList.add('active');
}

export default toggleElement;