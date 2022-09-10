function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
   
    
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
      img.src='./ex014/manha.png'
      document.body.style.background='#D9AA1E'
    }
   else if (hora >= 12 && hora <18){
    img.src='./ex014/tarde.png'
    document.body.style.background='#C0B39F'
   }
   else{
    img.src='./ex014/noite.png'
    document.body.style.background='#163A54'
   }
   
}
   

