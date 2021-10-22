let today = moment();
let now = moment().hour();
const tasks = JSON.parse(localStorage.getItem('tasks') ||
`{
    "09": null,
    "10": null,
    "11": null,
    "12": null,
    "13": null,
    "14": null,
    "15": null,
    "16": null,
    "17": null
}`);

// Returning today's date in dddd, MMM Do YYYY format
$('#currentDay').text(today.format('dddd, MMM Do YYYY'));

// // Set an array of hours to enable loops
// let hours = ['9 AM','10 AM','11 AM','12 M','1 PM','2 PM','3 PM','4 PM','5 PM'];

// Dynamically generate timeblocks
console.log(tasks);
for (let i = 9; i<18; i++){
    let hh = today.hour(i).format('HH');
    
    // console.log(tasks[hh]);
    // console.log(now);
    
    //ROWS - Create rows for each time block in the hours array 
    let row = $('<div>');
    row.addClass('row time-block');
    // COLUMNS - create 3 columns inside each row
        // creating hour divs for left column
    let hour = $('<div>');
    hour.addClass('col-1 col-md-1 col-xl-1 hour');
    hour.text(hh+':00');
        // creating block divs for middle column
    let block = $('<div>');
    block.addClass('col-10 col-md-10 col-xl-10');    
           // creating <textarea> for middle column (block)
    let textArea = $('<textarea>');
    textArea.attr({'id':'txtArea'+hh, 'name':'task', 'placeholder':'Type your task here', 'cols':'108', 'rows':'4'});
    textArea.val(tasks[hh]);
    block.append(textArea);
        // creating save divs for right column 
    let save = $('<div>');
    save.addClass('col-1 col-md-1 col-xl-1 saveBtn');
    save.attr('id',hh);
    save.on('click',function(){
        tasks[hh] = textArea.val();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })
    
    // In for loop I will call a function that returns 'future', 'present' or 'past' class depending on the moment
            
        if(hh < now){    
            console.log('past')
        textArea.attr('class','past');
        }else if(hh == now){  
            console.log('present')  
            textArea.attr('class','present');
        }else {    
            console.log('future')
            textArea.attr('class','future');    
        };   

             // creating <button> with icon and appending to 'save'
    let iEl = $('<i>');
    iEl.addClass('fa fa-save');
    save.append(iEl);

    // appends columns to the row
    row.append(hour,block,save);

    // CONTAINER - appends rows to the container
    $('.container').append(row);    
}


