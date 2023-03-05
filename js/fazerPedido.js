


    let formulario = document.getElementById('pedir')
        
    formulario.addEventListener('submit', () => {
        
        event.preventDefault() 
        
        alert('Aqui')
        
        let sabor = document.getElementById('sabor')
        sabor = sabor.options[sabor.selectedIndex]
        sabor = sabor.text
        
       
        let massa = document.getElementById('massa')
        massa = massa.options[massa.selectedIndex]
        massa = massa.text
       
        let borda = document.getElementById('borda')
        borda = borda.options[borda.selectedIndex]
        borda = borda.text
        
        let pizza = {
            
            "sabor": sabor,
            "borda": borda,
            "massa": massa
        }
        
        let confirmar = confirm('Deseja finalizar o pedido?')
            //console.log(confirmar)
        
        if(confirmar){
            
             localStorage.setItem('pedido', JSON.stringify(pizza))
        
        alert(`Seu pedido foi confirmado! Pizza sabor ${pizza.sabor} com borda de ${pizza.borda} e massa ${pizza.massa}`)
        
        } else {
            
            window.location.href = 'index.html'
            alert('Pedido cancelado')
        }
        
        
       
        
        
        
        
    })