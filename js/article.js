/* Get id from url */
let url = location.href;
if(url.split('?id=').length > 1){
    var id = url.split('?id=')[1];
    if(!id.toString().length) incorrectID();
}else{
    incorrectID();
}

/* Fetch one event with id */
fetch('https://api.spacexdata.com/v2/launches/all?flight_number=' + id).then(function(result){
    return result.json();
}).then(function(data){
    buildData(data);
});

function buildData(data){
    if(!data.length) incorrectID();
    
    let wrapper = document.getElementById('recent');
    
    let image = data[0]['links']['mission_patch_small'];
    let image_str = '<img src="' + image + '">';
    if(image == null) image_str = '';
    let name = data[0]['mission_name'];
    document.querySelector('header').innerHTML = image_str + '<h2>' + name + '</h2>';
    
    let details = data[0]['details'];
    if(details == null) details = '';
    
    let success_str = data[0]['launch_success'];
    if(success_str) success = 'Yes';
    else success = 'No';
    
    let site = data[0]['launch_site']['site_name'];
    let description = data[0]['details'];
    
    document.getElementById('details').innerHTML = '<p>' + details + '</p><ul><li>Successfull launch<span>' + success + '</span></li><li>Launch site<span>' + site + '</span></li></ul>';
    
    let payload = data[0]['rocket']['second_stage']['payloads'];
    let payload_length = data[0]['rocket']['second_stage']['payloads'].length;
    document.getElementById('payload-length').innerHTML = payload_length;
    
    
    let payloadsElem = document.getElementById('payloads');
    for(let i = 0; i < payload_length; i++){
        payloadsElem.innerHTML += '<ul id="payload-' + (i+1) + '"><li>Payload Type<span>' + payload[i]['payload_type'] + '</span></li><li>Payload Weight<span>' + payload[i]['payload_mass_kg'] + '</span></li>';
        if(i < payload_length-1) payloadsElem.innerHTML += '<hr class="small">'; 
    }
    
    let video = data[0]['links']['video_link'].replace('/watch?v=', '/embed/');
    document.getElementById('video').innerHTML = '<iframe class="align" src="' + video + '"></iframe>';
    
    let wikipedia = data[0]['links']['wikipedia'];
    let reddit = data[0]['links']['reddit_launch'];
    let telemetry = data[0]['telemetry']['flight_club'];
    let article = data[0]['links']['article_link'];
    
    document.getElementById('links').innerHTML = '<li class="btn" onclick="window.location.href=\'' + wikipedia + '\'"><a href="' + wikipedia + '">Wikipedia</a></li><li class="btn" onclick="window.location.href=\'' + reddit + '\'"><a href="' + reddit + '">Reddit</a></li><li class="btn" onclick="window.location.href=\'' + telemetry + '\'"><a href="' + telemetry + '">Telemetry</a></li><li class="btn" onclick="window.location.href=\'' + article + '\'"><a href="' + article + '">Read More</a></li>';
}

function incorrectID(){
    location.href = 'events.html';
}