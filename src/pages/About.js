import ShaggyRogers from './images/ShaggyRogers.png';
import ScoobyDoo from './images/ScoobyDoo.png';

const About = () => {
  return  <div>
  <h1>About us</h1>
  <center>
  <p>Both Shaggy and Scobby have a passion for Coding, Spanish, and not going broke.</p>
  <br/>
  <div class="aboutContent">
                <table id="aboutTable">
                  <tr>
                    <th>Shaggy (Brendan)</th>
                    <th>Scooby (Holden)</th>
                  </tr>
                  <br/>
                  <tr>
                    <td></td>
                  </tr>
                  
                  <tr>
                    <td class="td">Shaggy is from Washington. He served his mission in Oklahoma and Chile.</td>
                    <td class="td">Scooby is from Tennesse. He served his mission in Southern Utah</td>
                  </tr>
                    
                   <tr>
                    <td class="td"><img src={ShaggyRogers}/></td>
                    <td class="td"><img src={ScoobyDoo}/></td>
                  </tr>
                    
                </table>
            </div>
            </center>
  <footer><a href="https://github.com/behunin3/CreativeLab3">https://github.com/behunin3/CreativeLab3</a></footer>
  </div>;
};

export default About;