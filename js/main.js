let root = null;
document.addEventListener("DOMContentLoaded", e => {
    root = new TicTacToe(document.getElementById("tictactoe-root"));
});

class TicTacToe {

    matrizGrid = [];
    rootApp = undefined;
    turn = {
        1 : 'x',
        2 : 'o'
    };
    options = {
        size: '3x3',
        silent: false
    };

    constructor(root, optionsUser){
        this.options = Object.assign({}, this.options, optionsUser);
        this.getRoot(root);
        this.drawGrid();
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

    // init(){
    
    // }

    drawGrid(){
        let div_container = document.createElement("DIV"),
            grid_size_split = [],
            grid_size = this.options.size;
        
        div_container.classList.value = "row w-50 text-center mx-auto";

        if(!grid_size) grid_size = "2x2";
        grid_size_split = grid_size.split('x');
        let perimeter = (grid_size_split[0] * grid_size_split[1]);

        for (let x = 0; x < perimeter; x++) {
            this.matrizGrid.push([]);
        }

        for (let x = 0; x < this.matrizGrid.length; x++) {
            let cell = document.createElement("DIV");
            cell.classList.value = "col-4 h-50 border text-center";

            let canvas = document.createElement("CANVAS");
            canvas.id = x;
            canvas.setAttribute('height', 100);
            canvas.setAttribute('width', 100);
            cell.addEventListener('click', event => {
                this.DrawY(canvas);
                this.drawX(canvas);
            });

            cell.insertAdjacentElement('beforeend', canvas);
            div_container.insertAdjacentElement('beforeend', cell);

        }
        this.rootApp.insertAdjacentElement('afterbegin', div_container);
    }

    drawX(canvas){
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

    DrawY(canvas){
        let context = canvas.getContext('2d');
        // arc(x, y, radius, startAngle, endAngle, counterclockwise)
        context.beginPath();
        context.lineWidth = 20;
        context.arc(50, 50, 35, 0, Math.PI * 2);
        context.moveTo(110, 75);
        context.strokeStyle = 'green';
        context.stroke();
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