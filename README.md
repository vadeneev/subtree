
## to update from subtrees:
git subtree pull --prefix src/modules/child1 https://github.com/vadeneev/child1.git master  
git subtree pull --prefix src/modules/child2 https://github.com/vadeneev/child2.git master  
(it gives us ability to control versions of each sub-app)  
(instead of master we could use name of TAG(marked commit = release or smth important))  
we could push in subtree (but not recommended because of master)  

## currently subtrees uses actions from root "action/action" resolved with NODE_PATH=src  
means, child1 / child2 uses their own actions, however in parent app - they use parent's actions (some kind of contract)  
means, that child1 / child2 totally uses parent's store with whole logic  
to accomplish that - we *must* avoid props drilling, and follow best practice with wrpping in HOC connect  
we could not follow such approach and use actions from local repos, however store would be provided from root app.

## what about sharing ?

first one is to use:
 git+ssh://git@<url-repository>.git#v0.1.0" in package.json  
 version system could be boring: - update repo, add tag, update package.json's version of *all* repos, run npm i  
 but it accomplishes its purpose: it shouldn't be updated often (only initial style guide create in best case)  
   
 next one (looks same except details) https://bit.dev/ (3rd party)  
 
## administration
Release could go into the pipe:  
* tag sub-repo with version  
* update root repo's dependecy with git commands  
* push updates to root's master  
* we could merge any branch from subrepo to custom root's branch  
 
 ## PROS:
 * Handy version control
 * no repo-merging, possibility of backward compatibility
 
 ## CONS
 * duck / contract system with store action / logic
 * still managing several repos  
 * efforts with shared package - additional repo, version update in all repos  
 
