const handleDisplay =(arg,arg2) =>{
    // console.log(arg)
    if(arg2){
        let allDot = document.querySelectorAll(".div1");
        allDot.forEach((element,index) =>{
            element.children[2].children[1].style.display="none";
        })
        return false;
    }
    let allDot = document.querySelectorAll(".div1");
    allDot.forEach(element =>{
        element.children[2].children[1].style.display="none";
    })
    let parent = arg.parentElement;
    // console.log(parent);
    // console.log(parent.children)

    let lastDiv = parent.children[1];
    lastDiv.style.display="block";
    
}
const handleEdit = (arg) =>{
    let parent = document.querySelector(`.div1:nth-child(${arg+1})`);
    parent.children[1].style.display="inline-block";
    parent.children[0].disabled = false;
    parent.children[0].focus();
    // parent.children[2].children[1].style.display="none";
    handleDisplay(1,2)

}
const handleDone = (arg) =>{
    let parent = document.querySelector(`.div1:nth-child(${arg+1})`);
    parent.children[1].style.display="inline-block";
    parent.children[0].disabled = true;
    // parent.children[0].focus();
}
const handleDelete = (arg) => {
    let parent = document.querySelector(`.div1:nth-child(${arg+1})`);
    parent.style.display = "none"
}
