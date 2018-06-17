/* Latest event */
https://api.spacexdata.com/v2/launches/latest
fetch('https://api.spacexdata.com/v2/launches/latest').then(function(result){
    return result.json();
}).then(function(data){
    buildData_latest(data);
});


/* Fetch recent-n events */
fetch('https://api.spacexdata.com/v2/launches').then(function(result){
    return result.json();
}).then(function(data){
    buildData_recent(data);
});

function buildData_recent(data){
    let numArticles = 4; // number of articles to display
    
    let wrapper = document.getElementById('articles');
    for(let i = data.length-1; i >= (data.length-numArticles); i--){
        id = data[i]['flight_number'];
        let name = data[i]['mission_name'];
        let image = data[i]['links']['mission_patch_small'];
        
        wrapper.innerHTML += '<article onclick="window.location.href=\'article.html?id=' + id + '\'"><img src="' + image + '"><a href="article.html?id=' + id + '"><h2>' + name + '</h2></article>';
    }
}

function buildData_latest(data){  
    let video = data['links']['video_link'].replace('/watch?v=','/embed/');
    document.getElementById('live').innerHTML = '<iframe src="' + video + '"></iframe>';
}