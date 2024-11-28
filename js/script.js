
// // Menu 
// let list = document.querySelectorAll('.list');
// let info = document.querySelectorAll('.info')
// let contentInfo = document.querySelector('.content-info')


//   for(let i=0 ; i<list.length; i++){
//     list[i].addEventListener('click',function(){
//       document.querySelector('.docPic').style.display ="none"
//       document.querySelector('.info').style.display = 'block'

//      for(let j=0 ; j<list.length; j++){
//       list[j].classList.remove('active')
//      }
//      this.classList.add('active');
//      let dataFilter = this.getAttribute('data-filter');
//      for(let k =0 ; k<info.length; k++){
//        info[k].classList.add('hide');
//        info[k].classList.remove('active');
       
//        if(info[k].getAttribute('data-item')== dataFilter){
      
//         info[k].classList.add('active')
//         info[k].classList.remove('hide')
//       }
//      }
//     })
//   }
  
let list = document.querySelectorAll('.list');
let info = document.querySelectorAll('.info');
let contentInfo = document.querySelector('.content-info');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    document.querySelector('.docPic').style.display = "none";
    
    // جعل العرض مرنًا لكل عنصر حسب الحاجة
    for (let elem of info) {
      elem.style.display = 'none';
    }

    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }

    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < info.length; k++) {
      info[k].classList.add('hide');
      info[k].classList.remove('active');

      if (info[k].getAttribute('data-item') == dataFilter) {
        info[k].classList.add('active');
        info[k].classList.remove('hide');
        info[k].style.display = 'flex'; // إظهار العنصر المطابق
      }
    }
  });
}
