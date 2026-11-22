import React from 'react'
import img from '../assets/img/main-img.webp'
import start from '../assets/img/img1.webp'



function Home() {
  return (

    <div>
{/* 
        <h1>This is Home page</h1> */}
      
        {/* <img src={img} class="img-fluid" alt="water"/> */}

      <div className="card text-bg-dark">
        <img src={img} class="card-img" alt="..."/>
      </div>
       <br />

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">7 Days Easy Return</span>
        <span class="navbar-brand mb-0 h1">Cash on Delivery</span>
            <span class="navbar-brand mb-0 h1">Lowest Prices</span>
  </div>
</nav>
<br /><br />


{/* <div class="card" style="width: 18rem;">
  <img src="https://images.meesho.com/images/marketing/1744635497001.webp" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div> */}

<div className="img-card">
<img src="https://images.meesho.com/images/marketing/1744635542873.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635521751.webp" alt="" width="200" />
<img src="https://images.meesho.com/images/marketing/1744635497001.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635464683.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635432891.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635402151.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635614888.webp" alt="" width="200"/>
<img src="https://images.meesho.com/images/marketing/1744635646070.webp" alt="" width="200"/>
</div>

<br /><br />



<img src={start} alt="" >
</img>

<span className='right-card'>
  <img src="https://images.meesho.com/images/marketing/1762433786046.webp" alt="" />
<img src="https://images.meesho.com/images/marketing/1762433761056.webp" alt="" />
<img src="https://images.meesho.com/images/marketing/1762433804035.webp" alt="" />
<img src="https://images.meesho.com/images/marketing/1762433722680.webp" alt="" />

</span>


<br/><br/>



 



  
  

    </div>

  )
}

export default Home