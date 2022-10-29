import budgeting from './images/budgeting.jpg'

const Home = () => {
  return <div>
  <div class="content">
            <div class="content-item">
                <h1>Welcome to budgeting made easy</h1>
            </div>
            <div class="content-item">
                <p>We have multiple pages to enable the easiest way to 
                   manage your money. 
                </p>
            </div>
            
            <div class="content-item subflex">
              <div class="subflex-item" id="subflex-item1">
                <p class="subflex-child">Create a budget plan <a class="simple-link" href="budget.html">Click here</a></p>
              </div>
              <div class="subflex-item" id="subflex-item2">
                <p>Keep track of your purchases <a class="simple-link" href="purchasedetails.html">Click here</a></p>
              </div>
              <div class="subflex-item" id="subflex-item3">
                <p>Know the Creators <a class="simple-link" href="about.html">Click here</a></p>
              </div>
              <div class="subflex-item">
                <p>Create an account <a class="simple-link" href="#">Click here</a> [beta]</p>
              </div>
            </div>
            
            
            <div class="content-item">
              <img src={budgeting}/>
              <p>
                "My life changed forever with the help of this awesome website!"
                -Charlotte Peters
              </p>
              <p>
                "I've always been terrible with money, but this site made it so easy" -Not the creator
              </p>
              <p>
                "Ruh-roh raggy!" -Scooby Doo
              </p>
            </div>
        </div>
  <footer><a href="https://github.com/behunin3/CreativeLab3">https://github.com/behunin3/CreativeLab3</a></footer>
  </div>;
};

export default Home;