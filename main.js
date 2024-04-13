/* FAQ Accordion */
document.addEventListener("DOMContentLoaded",() => {
    const faqContainer = document.querySelector(".faq-content");

    faqContainer.addEventListener("click", (e) =>{
        console.log(e.target) /* Muestra lo que se clickeó */
        const groupHeader = e.target.closest(".faq-group-header")
        if (!groupHeader)/* Not group header */return /* Para que no pase nada si no tocas el header o el icono */
        const group = groupHeader.parentElement
        const groupBody = group.querySelector(".faq-group-body")
        const icon = groupHeader.querySelector("i")

        /* Toggle Icon */
        icon.classList.toggle("fa-plus"); /* Si es menos pasa a mas*/
        icon.classList.toggle("fa-minus"); /* Si es mas pasa a menos */

        /* Toggle Visibility of Body */

        groupBody.classList.toggle("open")


        /* Close other open FAQ bodies */
        const otherGroups = faqContainer.querySelectorAll(".faq-group") /* Me da un array con todos los grupos */
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector(".faq-group-body")
                const otherIcon = otherGroup.querySelector(".faq-group-header i")

                otherGroupBody.classList.remove("open")
                otherIcon.classList.remove("fa-minus")
                otherIcon.classList.add("fa-plus")
            }
        })
        
        console.log("🚀 ~ faqContainer.addEventListener ~ groupHeader:", groupHeader)

        
        
    })
});



