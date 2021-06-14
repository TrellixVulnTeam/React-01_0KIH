import {RepositoryItem} from "./RepositoryItem";
import {useState, useEffect} from "react";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RespositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/tvaditya/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories]);

    return (
        <section className="repository-list">
            <h1>My Respository List</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}