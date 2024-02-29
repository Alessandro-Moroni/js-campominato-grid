const container = document.querySelector('.container');
const startBtn = document.getElementById('btn');
// const c = parseInt(prompt('testo'));
// start(c);
startBtn.addEventListener('click', start);


function start(){
  reset();
  for(let i = 1; i <= 100; i++){
    const square = squareContainer(i);
    container.append(square);
  }
}

 
  

function squareContainer(number){
  const sq = document.createElement('div');
  sq.className = 'square';
  
  sq.propSq = number;

  sq.addEventListener('click', function(){
    const number = this.propSq;
    this.innerHTML = (!this.classList.contains('color')) ? this.innerHTML = this.propSq : this.innerHTML = '';

    this.classList.toggle('color');

    console.log(this);
  })


  return sq;
}




function reset(){
  container.innerHTML = '';
}


// function start(c){
//   const uno = 100;
//   const due = 81;
//   const tre = 49;

//   for(let i = 1; i <= c; i++){
//       const square = squareContainer(i);
//       container.append(square);

//     }


// }
