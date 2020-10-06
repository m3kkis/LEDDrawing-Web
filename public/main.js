document.addEventListener('DOMContentLoaded', (event) => {

    const socket = io();
    init( socket );

});

function init(socket){

    var hex = "#349eeb";
    var colorPicker = document.getElementById('color_picker');
    var btnFill = document.querySelectorAll('.fill');
    var btnSubmit = document.getElementById('btnSubmit');
    var btnReset = document.getElementById('btnReset');
    
    colorPicker.onchange = function(){
        hex = this.value;
    }

    btnFill.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if( this.hasAttribute('hex') ){
                this.removeAttribute('style');
                this.removeAttribute('hex');
            }
            else
            {
                this.style.backgroundColor = hex;
                this.setAttribute('hex', hex);
            }
        });
    });

    btnReset.onclick = function(){
        var allLEDS = document.querySelectorAll(".led_row > .led_slot > .led_circle > .fill");
        allLEDS.forEach(function(oneLED){
            if( oneLED.hasAttribute('hex') ){
                oneLED.removeAttribute('style');
                oneLED.removeAttribute('hex');
            }
        });
    }

    btnSubmit.onclick = function(){
        var matrix = [];
        let ledRows = document.querySelectorAll(".led_row");
        ledRows.forEach(function(oneRow){
            let row = [];
            let oneLed = oneRow.querySelectorAll(".led_slot > .led_circle > .fill");

            oneLed.forEach(function(ledHex){

                if( ledHex.hasAttribute('hex') ){
                    row.push(ledHex.getAttribute("hex"));
                }
                else
                {
                    row.push("0");
                }
            });
            matrix.push(row);
        });

        socket.emit('sendMatrix', matrix);

    }
}
