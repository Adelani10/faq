//using selectors inside the element
// traversing the dom



const btn = document.querySelectorAll(".btn")

btn.forEach(function(bttn){
    bttn.addEventListener("click", function(e){
        let finalBtn = e.currentTarget.parentElement.parentElement
        finalBtn.classList.toggle("show-text")
    })
})

