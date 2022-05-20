document.getElementById('knapp').addEventListener('click', Emil);
let color1=0;



function Emil()
{

    if(color1==0)
    {
        document.body.style.backgroundColor="white";
        color1=1;
    }
    else if (color1==1)
    {
document.body.style.backgroundColor="green";
color1=0;

    }
}