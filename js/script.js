const container = document.querySelector('.container');


reset();


  for(let i = 1; i <= 100; i++){
    const square = squareContainer(i);
    container.append(square);
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