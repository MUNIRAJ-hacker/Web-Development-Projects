let colors=generateRandomColors(6);
let squares=document.querySelectorAll('.square');
var pickedColor=pickColor();
let colorDisplay=document.querySelector('#displayColor');
let tryAgain=document.querySelector('.tryAgain');
let h1=document.querySelector('h1');
let btn=document.querySelector('button');
colorDisplay.textContent=pickedColor;
for(let i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener('click',function(){
		let clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			tryAgain.textContent='Correct';
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			tryAgain.style.color='green'
		}
		else
		{
			this.style.backgroundColor='#232323';
			tryAgain.textContent='Try Again';
			tryAgain.style.color='red'
		}
	})
}
function changeColor(color)
{
	for(let i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	let random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	let arr=[]; 
	for(let i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	let r=Math.floor(Math.random()*256)
	let g=Math.floor(Math.random()*256)
	let b=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")";
}
btn.addEventListener('click',function()
{
	window.location.reload();
})