import React, { createContext, useContext } from 'react';

export const UsersContext = createContext();

export function useLoggedInUser() {
    return useContext(UsersContext)
}

export function UsersProvider({ children }) {

    const allUsersData = [
        {
            id: 1,
            username: "Rob Hope",
        },
        {
            id: 2,
            username: "Bob Hope",
        },
        {
            id: 3,
            username: "Mob Tope",
        }
    ];

    let loggedInUser = allUsersData[Math.floor(Math.random() * allUsersData.length)];
    
    return (
        <UsersContext.Provider value={loggedInUser}>
            {children}
        </UsersContext.Provider>
    )
}