const container = document.querySelector('.container');

reset();

for(let i = 1; i <= 100; i++){
  const square = squareContainer(i);
  container.append(square);
}


function squareContainer(number){
  const sq = document.createElement('div');
  sq.className = 'square';
  




  return sq;
}

function reset(){
  container.innerHTML = '';
}