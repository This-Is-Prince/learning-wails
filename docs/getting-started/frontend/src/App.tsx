import {Greet} from "../wailsjs/go/main/App";
import './index.css'

function App() {
    
    function greet(name:string) {
        Greet(name).then((name)=>{
            console.log(name);
        });
    }

    return (
        <div>
            <h1 className="bg-red-500">Hello World</h1>
        </div>
    )
}

export default App
