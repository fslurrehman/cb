/*Function def for more comment pages*/
	function ParseLinkHeader(link)
	{
		if (link !=null)
			var entries = link.split(",");
			var links = { };
			for (var i in entries)
			{
				var entry = entries[i];
				var link = { };
				link.name = entry.match(/rel=\"([^\"]*)/)[1];
				link.url = entry.match(/<([^>]*)/)[1];
				link.page = entry.match(/page=(\d+).*$/)[1];
				links[link.name] = link;
			}			
		return links;
	}
	/*end of function def for more comment pages*/
	
function ShowComments(repo_name, comment_id, page_id)
{
	$(document).ready(function ()
    {
        $.getJSON("https://api.github.com/repos/" + repo_name + "/issues/" + comment_id, function(data) {
            NbComments = data.comments;
        });
	
	
    $.ajax({
        url: "https://api.github.com/repos/" + repo_name + "/issues/" + comment_id + "/comments" + "?page=" + page_id,
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments, textStatus, jqXHR) {
			
			// Add post button to first page
 
            if (1 == page_id) {
                // post button 
				var url = "https://github.com/" + repo_name + "/issues/" + comment_id + "#new_comment_field";
				$("#gh-comments-list").append("<a href='" + url + "#new_comment_field' rel='nofollow' class='btn btn-outline-primary px-3 py-2'>Post your comment</a>");

                //$("#gh-comments-list").append("<form action='" + url + "' rel='nofollow'> <input type='submit' value='Post a comment on Github' /> </form>");
                $("#gh-comments-list").append("<br />"); //adding break for vertical space
				$("#gh-comments-list").append("<br />"); //adding break for vertical space
				
                
			}
            // Individual comments
            $.each(comments, function(i, comment) {

                var date = new Date(comment.created_at);

                var t = "<div id='gh-comment'>";
                t += "<img src='" + comment.user.avatar_url + "' width='24px'>";
                t += "<b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b>";
                t += " posted at ";
                t += "<em>" + date.toUTCString() + "</em>";
                t += "<div id='gh-comment-hr'></div>";
                t += comment.body_html;
                t += "</div>";
				//t += "<hr>";
                $("#gh-comments-list").append(t);
            });
			// Setup comments button if there are more pages to display
            var links = ParseLinkHeader(jqXHR.getResponseHeader("Link"));
            if ("next" in links)
            {
                $("#gh-load-comments").attr("onclick", "ShowComments(\""+repo_name+"\"," + comment_id + "," + (page_id + 1) + ");");
                $("#gh-load-comments").show();
            }
            else
            {
               $("#gh-load-comments").hide();
            }			
			
        },
        error: function() {
            $("#gh-comments-list").append("Comments are not open for this post yet.");
        }
    });
});
}

function DoGithubComments(repo_name, comment_id)
{
    $(document).ready(function ()
    {
        ShowComments(repo_name, comment_id, 1);
    });
}