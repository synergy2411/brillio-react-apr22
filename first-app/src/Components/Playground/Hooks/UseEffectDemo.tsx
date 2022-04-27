import { useEffect, useState } from "react";
import axios from 'axios';


const UseEffectDemo = () => { 

    const [counter, setCounter] = useState<number>(0)
    const [toggle, setToggle] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('');
    const [repos, setRepos] = useState<Array<{name : string}>>([]);

    // useEffect(() => {
    //     console.log("UseEffect Callback Function without any dependency ")
    // })

    // ComponentDidMount
    // useEffect(() => {
    //     console.log("Callback with Empty Dependeny");
    // }, [])

    // useEffect(() => {
    //     console.log("Callback with Dependency - counter");
    // }, [counter])

    // useEffect(() => {
    //     console.log("Callback with dependency - Toggle and cleanup");
    //     return () => {
    //         console.log("Cleanup Function")
    //     }
    // }, [toggle])

    useEffect(() => {
        console.log("Use effect works")
        return () => {
            console.log("Clean up works")
        }
    }, [counter])

    // Type-ahead suggestions
    // useEffect(() => {
    //     let notifier = setTimeout(() => {
    //         axios.get(`https://api.github.com/users/${username}/repos`)
    //             .then(response => {
    //                 setRepos(response.data)
    //             }).catch(console.log)
    //     }, 1000)
    //     return () => {
    //         clearTimeout(notifier)
    //     }
    // }, [username])          // synergy2411

    const usernameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setUsername(event.target.value)
    }

    return (
        <div>
            <h3>Use effect in action</h3>
            <p>Counter : { counter } </p>
            <button onClick={() => setCounter(counter + 1)}> Increase Counter</button>
            <button onClick={() => setToggle(!toggle)}> Toggle</button>
            <hr />
            <br />
            <input type="text" 
                placeholder="enter github user name" 
                value={username} 
                onChange={usernameChangeHandler}/>
                <br />
                <ul>
                    {repos.map(repo => <li key={repo.name}>{repo.name}</li>)}
                </ul>
        </div>
    )

}

export default UseEffectDemo;