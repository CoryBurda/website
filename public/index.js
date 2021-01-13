const toggleCourse = (course) => {
    let element = document.getElementById(course);
    let classes = element.classList;
    let hidden = classes.contains('hidden');
    let elementButton = document.getElementById(`${course}-button`);
    let elementButtonClasses = elementButton.classList;

    if(hidden){
        elementButtonClasses.add("active");
        classes.remove("hidden");
        console.log(`${course} is revealed`);
    }
    else{
        elementButtonClasses.remove("active");
        classes.add("hidden");
        console.log(`${course} is hidden`);
    }
};

const toggleNavbar = () => {
    let element = document.getElementById("navbar");
    let classes = element.classList;
    let hidden = classes.contains('hidden');
    let elementButton = document.getElementById(`navbar-button`);
    let elementButtonClasses = elementButton.classList;

    if(hidden){
        elementButtonClasses.add("active");
        classes.remove("hidden");
        console.log(`navbar is revealed`);
    }
    else{
        elementButtonClasses.remove("active");
        classes.add("hidden");
        console.log(`navbar is hidden`);
    }
};