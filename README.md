
## to update subtrees:
git subtree pull --prefix src/modules/child1 https://github.com/vadeneev/child1.git master  
git subtree pull --prefix src/modules/child2 https://github.com/vadeneev/child2.git master  
(it gives us ability to control versions of each sub-app)  
(instead of master we could use name of TAG(marked commit = release or smth important))  
we could push in subtree (but not recommended because of master)  

## currently subtrees uses actions from root "action/action" resolved with NODE_PATH=src  
means, child1 / child2 uses their own actions, however in parent app - they use parent's actions (some kind of contract)  
means, that child1 / child2 totally uses parent's store with whole logic  
to accomplish that - we *must* avoid props drilling, and follow best practice with wrpping in HOC connect  
