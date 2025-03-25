const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceelem=document.querySelectorAll(".price")	;
	let ans=0;

	priceelem.forEach(element => {
		const price=parseFloat(element.textContent);
		if(!isNaN(price))
		{
			ans += price;
		}
	});

	const table=document.querySelector("table");

	const newrow=document.createElement("tr");
	const totcell=document.createElement("td");

	totcell.textContent=`Total Price:${ans.toFixed(2)}`;
	totcell.colSpan=table.rows[0].cells.length;
	newrow.appendChild(totcell);
  table.appendChild(newrow);
};

getSumBtn.addEventListener("click", getSum);

