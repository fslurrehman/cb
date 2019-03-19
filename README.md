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

`cd ..
hugo server
del public/*
hugo
cd public`

`git add --all
git commit -m "toc test check" 
git push origin gh-pages`



You can use below steps for publishing on github is taken from https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003:

---start----

`# remove previous publication
rm -rf public
mkdir public

# clone gh-pages branch from the local repo into a repo located within "public"
git clone .git --branch gh-pages public
  
# generate
hugo
  
# commit the changes in the clone and push them back to the local gh-pages branch    
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages

# publish
git push upstream gh-pages`


---end---

Lisence: GNU/GPL V2.0 