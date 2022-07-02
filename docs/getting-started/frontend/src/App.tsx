import { Greet } from "../wailsjs/go/main/App";
import { Greet2 } from "../wailsjs/go/main/App2";
import { HelloBro } from '../wailsjs/go/hello/Hello'
import './index.css'
import { useState } from "react";

interface State {
    greet: string;
    greet2: string;
    hellos: string[];
}

function App() {
    const [state, setState] = useState<State>({ greet: "", greet2: "", hellos: [] })
    const [g1, setG1] = useState("");
    const [g2, setG2] = useState("");

    function greet(name: string) {
        Greet(name).then((name) => {
            setG1(name)
        });
    }

    function greet2(name: string) {
        Greet2(name).then((name) => {
            setG2(name)
        });
    }
    function hello() {
        HelloBro().then((hello) => {
            setState((prevState) => {
                return { ...prevState, hellos: [...prevState.hellos, hello] }
            })
        })
    }

    return (
        <div className="flex flex-col gap-y-5 pb-5">
            <h1 className="font-bold text-xl text-center py-2 italic bg-blue-600 text-white">Hello World</h1>
            <section className="grid grid-cols-2 px-5 gap-x-5">
                <article className="flex flex-col gap-y-5 text-center">
                    <input className="border-2 border-blue-500 rounded-md px-2 outline-none" type="text" onChange={(e) => {
                        setState((prevState) => {
                            return { ...prevState, greet: e.target.value }
                        })
                    }} value={state.greet} placeholder="Greet" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            greet(state.greet)
                            setState((prevState) => {
                                return { ...prevState, greet: "" }
                            })
                        }
                    }} />
                    <h1>{g1}</h1>
                </article>
                <article className="flex flex-col gap-y-5 text-center">
                    <input className="border-2 border-blue-500 rounded-md px-2 outline-none" type="text" onChange={(e) => {
                        setState((prevState) => {
                            return { ...prevState, greet2: e.target.value }
                        })
                    }} value={state.greet2} placeholder="Greet2" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            greet2(state.greet2)
                            setState((prevState) => {
                                return { ...prevState, greet2: "" }
                            })
                        }
                    }} />
                    <h1>{g2}</h1>
                </article>
            </section>
            <section className="flex flex-col items-center gap-y-5">
                <button className="bg-blue-600 px-7 py-2 rounded-md text-white " onClick={() => { hello() }}>Hello Bro</button>
                <ul className="grid grid-cols-3 gap-x-5 gap-y-5">
                    {state.hellos.map((hello, index) => {
                        return <li className="text-white italic bg-black px-5 py-1" key={index}>{hello}</li>
                    })}
                </ul>
            </section>
        </div>
    )
}

export default App
