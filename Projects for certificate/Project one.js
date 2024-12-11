const container = document.getElementById("nobody")
const container2 = document.getElementById("nobody2")
const container3 = document.getElementById("nobody3")
const container4 = document.getElementById("nobody4")
const icon = document.getElementById("icon")
const icon2 = document.getElementById("icons")
const icon3 = document.getElementById("icon3")
const icon4 = document.getElementById("icon4")
const seemore = document.getElementById("item")
const seemorei = document.getElementById("seemorei")

container.addEventListener("mouseover",()=>{
  icon.style.color ="white"
})
container2.addEventListener("mouseover",()=>{
    icon2.style.color ="white"
  })
  container3.addEventListener("mouseover",()=>{
    icon3.style.color ="white"
  })
  container4.addEventListener("mouseover",()=>{
    icon4.style.color ="white"
  })
container.addEventListener("mouseout",()=>{
icon.style.color = "green"

  })
  container2.addEventListener("mouseout",()=>{
    icon2.style.color = "green"
    
      })
container3.addEventListener("mouseout",()=>{
     icon3.style.color = "green"
        
})
container4.addEventListener("mouseout",()=>{
 icon4.style.color = "green"
})

seemore.addEventListener("mouseover",()=>{
   seemorei.classList.add("seemore")
   seemorei.style.transition = "1s"
})
seemore.addEventListener("mouseout",()=>{
   seemorei.classList.remove("seemore")

 })