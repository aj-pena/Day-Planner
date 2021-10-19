let today = moment();
// Returning today's date in dddd, MMM Do YYYY format
$('#currentDay').text(today.format('dddd, MMM Do YYYY'));

// Set an array of hours to enable loops
let hours = ['9 AM','10 AM','11 AM','12 M','1 PM','2 PM','3 PM','4 PM','5 PM'];

// Dynamically generate timeblocks
for (let i = 0; i<hours.length; i++){
    //ROWS - Create rows for each time block in the hours array 
    let row = $('<div>');
    row.addClass('row time-block');
    // COLUMNS - create 3 columns inside each row
        // creating hour divs for left column
    let hour = $('<div>');
    hour.addClass('col-1 col-md-1 col-xl-1 hour');
    hour.text(hours[i]);
        // creating block divs for middle column
    let block = $('<div>');
    block.addClass('col-10 col-md-10 col-xl-10');
           // creating <textarea> for middle column (block)
    let textArea = $('<textarea>');
    textArea.attr({'id':hours[i], 'name':'task', 'class':'past', 'placeholder':'Type your task here', 'cols':'108', 'rows':'4'});
    block.append(textArea);
        // creating save divs for right column 
    let save = $('<div>');
    save.addClass('col-1 col-md-1 col-xl-1 saveBtn');
       
             // creating <button> with icon and appending to 'save'
    let iEl = $('<i>');
    iEl.addClass('fa fa-save');
    save.append(iEl);

    // appends columns to the row
    row.append(hour,block,save);

    // CONTAINER - appends rows to the container
    $('.container').append(row);
    
}