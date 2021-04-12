{
  const $button = document.getElementById('button');
  const $back_ground = document.getElementById('back-ground');
  const $title = document.getElementById('title');
  const $back_ground_value = document.getElementById('color-value');
  
  $button.addEventListener('click', () =>{

  function colorChoice() {
    let colors = ['#ff9966','#ccff00','#ccffff','#ff33cc','#cc9999','#cccccc','##9999ff','#9966cc'];
    $back_ground.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    $back_ground_value.innerHTML = $back_ground.style.backgroundColor;
  }

  colorChoice();
  })


 

  

}