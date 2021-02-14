const isElementActive = (element) => {
    const classes = [ ...element.classList ];
    
    return classes.includes('active');
}

export default isElementActive;