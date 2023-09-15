document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const ul = document.querySelector('#tasks')
  // const btn = document.createElement('button')
  form.addEventListener('submit', submitFunc)
  
;
function submitFunc (event){
  event.preventDefault()
  let comment = event.target
  const btn = document.createElement('button')
  btn.textContent = ' X '
  comment = comment.querySelector('#new-task-description')
  comment = comment.value
  const p = document.createElement('p')
  btn.addEventListener('click',(e)=>{
    btn.parentNode.remove(btn)
  })
  if (comment){
  p.textContent = comment
  // console.log(comment)
p.append(btn)
  ul.append(p)
  event.target.reset()}
}

})