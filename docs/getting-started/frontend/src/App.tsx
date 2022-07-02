import { Greet, MessageDialog } from "../wailsjs/go/main/App";
import { Greet2  } from "../wailsjs/go/main/App2";
import { HelloBro } from '../wailsjs/go/hello/Hello'
import { BrowserOpenURL, Environment, LogPrint, Quit, WindowCenter, WindowFullscreen, WindowHide, WindowMaximise, WindowMinimise, WindowReload, WindowReloadApp, WindowSetDarkTheme, WindowSetLightTheme, WindowSetSystemDefaultTheme, WindowShow, WindowToggleMaximise, WindowUnfullscreen, WindowUnmaximise, WindowUnminimise } from '../wailsjs/runtime/runtime'
import './index.css'
import { useEffect, useState } from "react";

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
    useEffect(() => {
        Environment().then((obj) => {
            LogPrint(JSON.stringify(obj));
        })
    }, [])

    return (
        <div className="flex flex-col gap-y-5 py-5">
            <div className="grid grid-cols-4 gap-5 px-5">
                <button onClick={() => {
                    Quit();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Close
                </button>
                <button onClick={() => {
                    WindowCenter();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Center
                </button>
                <button onClick={() => {
                    WindowFullscreen()
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Full
                </button>
                <button onClick={() => {
                    WindowUnfullscreen();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Unfull
                </button>
                <button onClick={() => {
                    WindowReload();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Reload
                </button>
                <button onClick={() => {
                    WindowReloadApp();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Reload App
                </button>
                <button onClick={() => {
                    WindowSetSystemDefaultTheme();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window System Default Theme
                </button>
                <button onClick={() => {
                    WindowSetDarkTheme();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window System Dark Theme
                </button>
                <button onClick={() => {
                    WindowSetLightTheme();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window System Light Theme
                </button>
                <button onClick={() => {
                    WindowHide();
                    setTimeout(() => {
                        WindowShow();
                    }, 2000)
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Hide
                </button>
                <button onClick={() => {
                    WindowMaximise();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Maximise
                </button>
                <button onClick={() => {
                    WindowUnmaximise();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Unmaximise
                </button>
                <button onClick={() => {
                    WindowMinimise();
                    setTimeout(() => {
                        WindowUnminimise();
                    }, 2000)
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Minimise
                </button>
                <button onClick={() => {
                    WindowToggleMaximise();
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Window Toggle Maximise
                </button>
                <button onClick={() => {
                    BrowserOpenURL("https://google.com");
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Go To Google
                </button>
                <button onClick={() => {
                    MessageDialog("Hello","Bro");
                }} className="bg-red-600 px-7 py-2 rounded-md text-white">
                    Display Dialog
                </button>

            </div>
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
