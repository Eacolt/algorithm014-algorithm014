
//迭代的方法
var preorder = function(root) {
    let res = [];
    if(!root)return res;
    let stk = [];
    //先把根元素存起来
    stk.push(root);
    while(stk.length != 0){
     
        //将栈中最后一个元素取出，向后取出，保证这个是头部。
        let tmp = stk.pop();
        res.push(tmp.val);
        for(let i = tmp.children.length-1; i >= 0; --i){
            stk.push(tmp.children[i]);
            
        }
    }
    return res;
    
};

 