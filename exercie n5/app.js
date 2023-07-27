


function premier(n){
  let l=0;
  for(i=1;i<=n;i++){
    if (n%i===0){
      l=l+1
    }

  }
  
  console.log(n,'is prime?:', l==2);

  }
