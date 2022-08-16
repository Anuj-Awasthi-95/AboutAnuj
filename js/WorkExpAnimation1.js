const cards1 = document.querySelectorAll(".hide")

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
},{
  threshold: 0.5,
  }
)
cards1.forEach(card=>{
  observer1.observe(card) 
})
            
