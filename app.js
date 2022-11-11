import {indexView} from "./src/js/views/index.js";
// import {cartView} 

 document.addEventListener('DOMContentLoaded', async ()=>{
    if (history.state){
        const {page, load} = history.state;
        const {tag, functionCall, args} = load;
        if (page == 'index') indexView(args);
    } else {
        indexView();
    }
});

window.onpopstate = (event) => {
    const {page, load} = event.state;
    const {tag, functionCall, args} = load;
    if (page == 'index') indexView(args);
};