function countP([...args]){
    var count=0;
   for (let index = 0; index < args.length; index++) {
       if(args[index]=='p'||args[index]=='P')
       count++
       
   }
     console.log(`The number of 'p/P' in  'Peter Piper picked a peck of pickled peppers
     A peck of pickled peppers Peter Piper picked
     If Peter Piper picked a peck of pickled peppers
     Where’s the peck of pickled peppers Peter Piper picked?' are ${count}`);   
    }
    countO(`Peter Piper picked a peck of pickled peppers
    A peck of pickled peppers Peter Piper picked
    If Peter Piper picked a peck of pickled peppers
    Where’s the peck of pickled peppers Peter Piper picked?`);
