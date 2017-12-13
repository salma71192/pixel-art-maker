$(document).ready(function(){
    
    // TODO: Select size input
    let girdHeight = $('#input_height');
    let girdWidth = $('#input_width');
    const submitBtn = $('#submit-btn');
    // TODO: Select table
    let pixelCanvas = $('#pixel_canvas');


    /**
    * Make grid
    * @param {Number} height
    * @param {Number} width
    */
    function makeGrid(height, width) {
        // Insert table cells
        let grid;
        height = height.val();
        width = width.val();
        for(let i = 0; i < height; i++) {
            grid += '<tr>';
            for (let x = 0; x < width; x++) {
               grid += '<td></td>';
            };
            grid += '</tr>';
        }

        pixelCanvas.append(grid);
    }
    
    // When size is submitted by the user, call makeGrid()
    submitBtn.click(function(evt){
        evt.preventDefault();
        console.log(girdHeight.val());
        makeGrid(girdHeight,girdWidth);
    });
    
    // color the grid cells
    pixelCanvas.click(function(evt){
        let color = $('#colorPicker').val();
        $(evt.target).css('background-color', color);
    })
});

