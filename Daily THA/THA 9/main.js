
const container = document.querySelector('.box');

const seatCount = document.getElementById('bookedSeats');
const remCount = document.getElementById('remainingSeats');

var bookedSeats = 0;
var remainingSeats = 40;

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('ticket') && !e.target.classList.contains('boxClicked')){
        e.target.classList.add('boxClicked');
        bookedSeats++;
        remainingSeats--;
    }
    else{
        e.target.classList.remove('boxClicked');
        bookedSeats--;
        remainingSeats++;
    }
    seatCount.innerText = bookedSeats;
    remCount.innerText = remainingSeats;
});
