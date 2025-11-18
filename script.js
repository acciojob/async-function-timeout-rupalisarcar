//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("btn");
btn.addEventListener('click', msgDisplay)


const promise1 = (delayValue, text) =>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(text)
		},delayValue)
	})
}

async function msgDisplay(){
	const text = document.getElementById("text").value
	const delayValue = document.getElementById("delay").value;	
	try{
		const data = await promise1(delayValue, text);
		output.textContent =data;
	}catch(e){
		console.log(e)
	}
}