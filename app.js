//using selectors inside the element
// traversing the dom

const qxt = document.querySelectorAll(".questions")





qxt.forEach(function(hello){
    const btn = hello.querySelector(".btn")
    // console.log(btn)
    btn.addEventListener("click", function() {
        qxt.forEach(function(item) {
            if (item !== hello){
                item.classList.remove("show-text")
            }
        })
        hello.classList.toggle("show-text")
    })
})




// const btnS = document.querySelector(".btn")
// console.log(btnS)

