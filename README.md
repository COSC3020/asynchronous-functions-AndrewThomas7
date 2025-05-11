# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources

#1-Chat GPT Querey-"let count=0;

async function Count(number,key){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           if(number==key){
            resolve('Success')
           }
           else{
            reject('Failed')
           }
        },100)
    })
}

async function KeyCountAsync(array,key){
    for(number of array){
        await Count(number,key).then((outcome)=>{
            count++
        }).catch((outcome)=>{
            count+=0
        })
    }
    console.log(count)
}. IS this asynchronous? no code please"

#2-https://www.youtube.com/watch?v=DHvZLI7Db8E-Leared about promises here and used them in my implementation




## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

# Answer

Here we begin by initalizing a count for the number of times the given key appears, this is a negligible statement. Next we loop through all the items in the array and use a callback function called count as we go through.Count is an async function and uses a promise to return either a resolved state or a reject state. This logic for this is simple and is just two comparions making these operations negligible for the ultimate time complexity too. This outcome is returned and then based off the result we choose to add to the count or not to. If the key matches an item we increiment and if not we don't overall this process takes $\theta(n)$ because are at most only looping though the items in the array. Nothing else contributes here.

$$\theta(n)$$
