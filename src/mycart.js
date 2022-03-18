import React from 'react'
import image1 from './Images/1.jpeg';
import image2 from './Images/2.jpeg';
import s from './Images/s.jpeg';
import image3 from './Images/3.jpeg';
import image4 from './Images/4.webp';





export default function Home(){
    return(
        <React.Fragment>
<h1>
        <b>
    Favourites
        </b>
</h1>
<div className="font">
<div className="relative">
    <button>
        <div className="font">
        Empty your favourites
        </div>
    </button>
</div>
<p>
    Don't lose your favourites! <b><u>Sign in</u></b> to ensure your favourites are saved and accessible from whereever you are
</p>
<ul className="list">
<li><img src={image1} width="200" height="250">
</img>
<p><h3>
    Yellow top&emsp;<b>$8</b>
</h3>
    <img src={s} width="100">
</img>
</p>
<div className="italics">Available in 7 colours</div>
<p><div className="relativeleft">
    2 FOR $12 OR 3 FOR $20
</div></p>
   <a href="default.asp" target="_blank">Select Size/Colour</a>
</li>
<li><img src={image2} width="200" height="250" >
</img>
<p><h3>
    black top&emsp;<b>$10-$12</b>
    </h3>
    <img src={s} width="100" >
</img>
</p>
<div className="italics">Available in 10 colours</div>
    <a href="default.asp" target="_blank">Select Size/Colour</a>
</li>
<li><img src={image3} width="200" height="250" >
</img>
<p><h3>
    denim jacket&emsp;<b>$15</b>
    </h3>
    <img src={s} width="100">
</img>
</p>
    <a href="default.asp" target="_blank">Select Size/Colour</a>
</li>
<li><img src={image4} width="200" height="250">
</img>
<p><h3>
    black tee&emsp;<b>$12</b>
    </h3>
    <img src={s} width="100">
</img>
</p>
<a href="default.asp" target="_blank">Select Size/Colour</a>
</li>
</ul>
</div>
        </React.Fragment>
    )
}

