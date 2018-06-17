/* Fetch upcoming-n events */
fetch('https://api.spacexdata.com/v2/launches/upcoming').then(function(result){
    return result.json();
}).then(function(data){
    buildData_upcoming(data);
});

function buildData_upcoming(data){
    let wrapper = document.getElementById('upcoming');
    for(let i = 0; i < data.length; i++){
        let id = data[i]['flight_number'];
        let name = data[i]['mission_name'];
        let date = data[i]['launch_date_local'].split('T')[0];
        let date_arr = date.split('-');
        let date_day = date_arr[2];
        let date_month = date_arr[1];
        let date_year = date_arr[0];
        
        let date_str = date_day + '/' + date_month + '-' + date_year;
        
        wrapper.innerHTML += '<div class="event" onclick="window.location.href=\'article.html?id=' + id + '\'"><a href="article.html?id=' + id + '" class="title">' + name + '</a><span class="date">' + date_str + '</span></div>';
    }
}

/* Fetch recent-n events */
fetch('https://api.spacexdata.com/v2/launches').then(function(result){
    return result.json();
}).then(function(data){
    buildData_recent(data);
});

function buildData_recent(data){
    let numArticles = 6; // number of articles to display
    
    let wrapper = document.getElementById('recent');
    for(let i = data.length-1; i >= (data.length-numArticles); i--){
        id = data[i]['flight_number'];
        let name = data[i]['mission_name'];
        let date = data[i]['launch_date_local'].split('T')[0];
        let date_arr = date.split('-');
        let date_day = date_arr[2];
        let date_month = date_arr[1];
        let date_year = date_arr[0];
        
        let date_str = date_day + '/' + date_month + '-' + date_year;
        
        wrapper.innerHTML += '<div class="event" onclick="window.location.href=\'article.html?id=' + id + '\'"><a href="article.html?id=' + id + '" class="title">' + name + '</a><span class="date">' + date_str + '</span></div>';
    }
}