// it is a sample of user defined module

exports.sum=((a,b)=>{
    return a+b;
});

exports.factorial=((n)=>{
    var f=1;
    for (i=1; i<=n; i++){
        f*=n;
    }
    return f;
});

exports.multiplication=((a,b)=>{
    return a*b;
});

// since these are functions which are required  to be exportedi in some other prog.
// so we have to declare this fuctions exportable.