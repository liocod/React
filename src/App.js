import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1> Formulaires</h1>
      
          <form>
                <div class="row mb-3 pbloc">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="FirstName"/>
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Name"/>
                      <br/> 
                    </div>
                    
                    
                </div>
                <div class="form-row dbloc">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Email"/>
                      <br/> 
                    </div>
                    <br/>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Password"/>
                      <br/>
                    </div>
                </div>
            </form>
            <br/>
  <div class="mb-9 tbloc">
  
  <textarea class="form-control" id="exampleFormControlTextarea1"placeholder=" votre texte  ici" rows="8"></textarea>
</div>
  
    </div>
  );
}

export default App;
