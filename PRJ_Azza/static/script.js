/**let btn = document.querySelector('fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#floatingInput')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else {
        inputSenha.setAttribute('type','password')
    }
})*/

/** function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '../home.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('usuario Logado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuario ou senha incorretos'
    usuario.focus()
  }
  
}*/
/**function validarPrimeiroDigito(cpf) {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += cpf[i] * (10 - i);
  }
  const resto = (sum * 10) % 11;
  if (resto < 10) {
    return cpf[9] == resto;
  }
  return cpf[9] == 0;
}

function validarSegundoDigito(cpf) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * (11 - i);
  }
  const resto = (sum * 10) % 11;
  if (resto < 10) {
    return cpf[10] == resto;
  }
  return cpf[10] == 0;
}

function validarRepetido(cpf) {
  const primeiro = cpf[0];
  let diferente = false;
  for(let i = 1; i < cpf.length; i++) {
    if(cpf[i] != primeiro) {
      diferente = true;
    }
  }
  return diferente;
}

function validarCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  }
  if(!validarRepetido(cpf)) {
    return false;
  }
  if (!validarPrimeiroDigito(cpf)) {
    return false;
  }
  if (!validarSegundoDigito(cpf)) {
    return false;
  }
  return true;
}

const cpf = "00000000001".split("").map((e) => parseInt(e));

const cpfValido = validarCpf(cpf);

console.log(cpfValido);
*/
