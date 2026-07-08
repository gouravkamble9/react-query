import React from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';

const Parallel = () => {
    const [userIds, setUserIds] = React.useState([1, 2]);

    const userQuiries = useQueries({
        queries: userIds.map((id) => {
            return {
                queryKey: ['user', id],
                queryFn: async () => {
                    const data = await fetch(`https://dummyjson.com/users/${id}`)
                    const resu = data.json()

                    return resu
                }
            }
        })
    })

    return (
        <div>
            <button
                onClick={() =>
                    setUserIds((prev) => {
                        return [...prev, Date.now()];
                    })
                }>
                Load more
            </button>

            {userIds.map((id) => (
                <h1 key={id}>{id}</h1>
            ))}
        </div>
    );
};

export default Parallel;