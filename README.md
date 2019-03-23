# Welcome to the source code of http://civil.builders website.

Following guide will show how to reproduce my website. You can edit it with your own need. It is made in hugo static page engine with academic theme. Go through following steps to reproduce this website:

## Hugo

Steps for windows:
Install scoop in powershell then install hugo as:
to install hugo:
 scoop install hugo
to update hugo:
 scoop update hugo

 
 
## Github commands for hugo

01. First there is need to create github repo
02. Upload your hugo website to that repo
03. Then better to create github branch named gh-pages. 
04. Then create site page from settings of the branch. i.e., name.github.io/reponame
05. Optionally you can assign domain name by adding a file CNAME in the gh-pages, which contains domain name e.g., example.com.
06. Goto your DNS Manager page and change A record to 192.30.252.153 and www to    


##To run hugo server and update public folder of website
`cd ..
hugo server
del public/*
hugo
cd public`

```console
git add --all
git commit -m "toc test check" 
git push origin gh-pages`
```


You can use below steps for publishing on github is taken from https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003:



To remove previous publication
```console
rm -rf public
mkdir public
```

To clone gh-pages branch from the local repo into a repo located within "public"
`git clone .git --branch gh-pages public`
  
To generate site:
`hugo`
  
To commit the changes in the clone and push them back to the local gh-pages branch:    
`cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages`

To publish:
`git push upstream gh-pages`




## Adding comments to hugo
01. Add in the begining of your hugo post: `ghcommentid = 1`
02. Backup existing comments.html and add comments.html to layouts/partials/ inside theme folder. You can copy the required file from mentioned path. Following is the code of comments.html:
   ```html
   {{ if $.Params.ghcommentid}}
<section id="gh-comments">
    <br/><br/>
    <h6>COMMENTS</h6>
    <div id="gh-comments-list"></div>
	
	<a href="javascript:void(0)" id="gh-load-comments" class="btn btn-outline-primary px-3 py-2" style="comments">Load more comments</a>
</section>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<!--script type="text/javascript" src="{{ .Site.BaseURL }}js/github-comments.js"></script> -->
<script type="text/javascript" src="{{ .Site.BaseURL }}js/github-comments.js"></script>
<script type="text/javascript">
   DoGithubComments("fslurrehman/BIM-Lectures",{{ $.Params.ghcommentid }});
   //DoGithubComments("dwilliamson/donw.io",{{ $.Params.ghcommentid }});
   
   
</script>
{{else}}
{{end}}
   ```
03. Add github-comments.js to static/js folder inside theme folder. You can copy the required file from mentioned path.
04. Add `{{ partial "comments.html" . }}` before </article> tag in  layouts/partials/docs_layout.html.
05. Add css styles for comments in css file of the theme. It shall contain following code:
   ```css
   #gh-comments {
   text-align: center;
   }
   
   #gh-comment {
   text-align: left;
   border:1px solid #b3b3b3;
   margin:2.5em 0;
   padding:10px;
   }
   
   #gh-comment-hr {
   border-top: inset 1px white;
   margin: 8px 0px;
   }
   
   #gh-comment p {
   margin:0px;
   }
   
   #gh-comment img {
   display: inline;
   vertical-align: middle;
   margin: 2px 10px 2px 2px;
   }
   ```



Lisence: GNU/GPL V2.0 