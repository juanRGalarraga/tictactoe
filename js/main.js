document.addEventListener("DOMContentLoaded", e => {
    DrawX();
    DrawY();
});

function DrawY(){
    let canvas = document.getElementById('y_draw');
    let context = canvas.getContext('2d');
    // arc(x, y, radius, startAngle, endAngle, counterclockwise)
    context.beginPath();
    context.lineWidth = 20;
    context.arc(50, 50, 35, 0, Math.PI * 2);
    context.moveTo(110, 75);
    context.strokeStyle = 'green';
    context.stroke();
}

function DrawX(){
    let canvas = document.getElementById('x_draw');
    let context = canvas.getContext('2d');

    context.lineWidth = 20;

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(15, 15);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(85, 15);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(85, 85);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(15, 85);
    context.stroke();
}

class TicTacToe {

    matrizEmpty = [
        [0, 0, 0]
        [0, 0, 0]
        [0, 0, 0]
    ];
    matrizUser = [];

    rootApp = undefined;
    options = {
        size: '4x4',
        silent: false
    };

    constructor(root, optionsUser){
        this.options = Object.assign({}, this.options, optionsUser);
        this.getRoot();
    }

    getRoot(root){
        if(typeof root === "string"){
            this.rootApp = document.getElementById(root);
        } else if (root instanceof HTMLDivElement){
            this.rootApp = root;
        } else {
            this.showdebug("Expected div root id or div root element to initialize game", "warn");
            return;
        }
    }

    init(){
        this.matrizUser = this.matrizEmpty.slice();
        
    }

    showdebug(message, type="log"){
        if(!this.options.silent) {
            switch (type) {
                case "warn":
                    console.warn(message)
                    break;
                case "log":
                    console.log(message)
                    break;
                case "error":
                    console.error(message)
                    break;
            }
        }
    }
    
}