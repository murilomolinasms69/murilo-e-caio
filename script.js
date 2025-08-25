const nome=document.querySelector('#entrada-nome'),email=document.querySelector('#entrada-email'),
telefone=document.querySelector('#entrada-telefone'),endereco=document.querySelector('#entrada-endereco'),
cidade=document.querySelector('#entrada-cidade'),uf=document.querySelector('#entrada-uf');

nome.addEventListener('input',()=>{localStorage.setItem(nome.id,nome.value);});
email.addEventListener('input',()=>{localStorage.setItem(email.id,email.value);});
telefone.addEventListener('input',()=>{localStorage.setItem(telefone.id,telefone.value);});
endereco.addEventListener('input',()=>{localStorage.setItem(endereco.id,endereco.value);});
cidade.addEventListener('input',()=>{localStorage.setItem(cidade.id,cidade.value);});
uf.addEventListener('input',()=>{localStorage.setItem(uf.id,uf.value);});

nome.value=localStorage.getItem(nome.id)||'';
email.value=localStorage.getItem(email.id)||'';
telefone.value=localStorage.getItem(telefone.id)||'';
endereco.value=localStorage.getItem(endereco.id)||'';
cidade.value=localStorage.getItem(cidade.id)||'';
uf.value=localStorage.getItem(uf.id)||'';

