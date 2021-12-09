$(document).ready(function(){
    var imageLink;
    var width;
    var height;
    var title;
    var totalViews;
    var totalSubscribers;
    var totalVideos;
    var channelId; 
    
    var url;

    $("form").submit(function(){
        channelId = $("#search").val(); 

        url = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCkviW3Cf8iC9VrWyda9nBAxxDHAH28L2c&id=" + channelId + "&part=snippet,contentDetails,statistics";
        $.get(url,function(data){

            fetchData(data);

            bindData(imageLink,width,height,title,totalSubscribers,totalViews,totalVideos);
    
        });

        return false;

    });
    
    function fetchData(data)
    {
        imageLink = data.items[0].snippet.thumbnails.medium.url;
        width = data.items[0].snippet.thumbnails.medium.url.width;

        height = data.items[0].snippet.thumbnails.medium.url.height;

        title = data.items[0].snippet.title;

        totalSubscribers = data.items[0].statistics.subscriberCount;

        totalViews = data.items[0].statistics.viewCount;

        totalVideos = data.items[0].statistics.videoCount;
    }

    function bindData(imageLink,width,height,title,totalSubscribers,totalViews,totalVideos)
    {
        $("#thumbnail").attr("src",imageLink);
        $("#thumbnail").attr("width",width); 
        $("#thumbnail").attr("height",height); 
        $("#title").html(title); 
        $("#totalSubscribers").html("<h5>Subscribers</h5>" + totalSubscribers);
        $("#totalViews").html("<h5>totalViews</h5>" + totalViews);
        $("#totalVideos").html("<h5>totalVideos</h5>" + totalVideos); 

    }

});