const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) 
form.addEventListener("change", save)

function add () {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)

  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso")
    return

  }
  
    alert("Adicionado com Sucesso")

  nlwSetup.addDay(today)
}




function save () {
  localStorage.setItem("computertech@habits", JSON.stringify (nlwSetup.data))

}
//const data = { 
 //   trabalhar: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10',
 //   '01-11', '01-12', '01-13', '01-14', '01-15', '01-16', '01-17', '01-18', '01-19', '01-20',
 //   '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30', '01-31'], }
  
    const data = JSON.parse(localStorage.getItem("computertech@habits")) || {}
     nlwSetup.setData(data)
     nlwSetup.load()