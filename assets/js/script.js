const form = document.forms.cadastro;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const {Name, cpf, rg, entrada, saida} = form; 
    console.log(Name.value, cpf.value, rg.value, entrada.value, saida.value)
    localStorage.setItem('cadastro', JSON.stringify({Name:Name.value, cpf:cpf.value, rg:rg.value, entrada:entrada.value, saida:saida.value})) 

    form.reset()
    window.alert('Cadastro efetuado com sucesso!');
})