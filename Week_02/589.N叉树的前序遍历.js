// vector<int> preorder(Node* root) {
//     vector<int> res;
//     if(!root)   return res;
//     stack<Node*> stk;
//     stk.push(root);
//     while(!stk.empty()){
//         Node* tmp = stk.top();
//         stk.pop();
//         res.push_back(tmp -> val);
//         for(int i = tmp -> children.size()-1; i >= 0; --i){
//             stk.push(tmp -> children[i]);
//         }
//     }
//     return res;
// }

var preorder = function(root) {
    let res = [];
    if(!root)return res;
    let stk = [];
    //先把根元素存起来
    stk.push(root);
    while(stk.length != 0){
     
        //将栈中最后一个元素取出。
        let tmp = stk.pop();
        res.push(tmp.val);
        for(let i = tmp.children.length-1; i >= 0; --i){
            stk.push(tmp.children[i]);
            
        }
    }
    return res;
    
};

 