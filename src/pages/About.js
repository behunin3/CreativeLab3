import ShaggyRogers from './images/ShaggyRogers.png';
import ScoobyDoo from './images/ScoobyDoo.png';

const About = () => {
  return  <div>
  <h1>About us</h1>
  <div class="aboutContent">
                <table id="aboutTable">
                  <tr>
                    <th>Shaggy (Brendan)</th>
                    <th>Scooby (Holden)</th>
                  </tr>
                  
                  <tr>
                    <td>Both Shaggy and Scobby have a passion for Coding, Spanish, and not going broke.</td>
                  </tr>
                  
                  <tr>
                    <td>Shaggy is from Washington. He served his mission in Oklahoma and Chile.</td>
                    <td>Scooby is from Tennesse. He served his mission in Southern Utah</td>
                  </tr>
                    
                   <tr>
                    <td><img src={ShaggyRogers}/></td>
                    <td><img src={ScoobyDoo}/></td>
                  </tr>
                    
                </table>
            </div>
  <footer><a href="https://github.com/behunin3/CreativeLab3">https://github.com/behunin3/CreativeLab3</a></footer>
  </div>;
};

export default About;