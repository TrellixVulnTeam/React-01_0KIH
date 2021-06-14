import {RepositoryItem} from "./RepositoryItem";
import {useState, useEffect} from "react";

import '../styles/repositories.scss';


export function RespositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/tvaditya/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories]);

    return (
        <section className="repository-list">
            <h1>Respository List</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}