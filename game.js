var restart = document.querySelector('#reset');

var squares = document.querySelectorAll("td");


function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)




function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
