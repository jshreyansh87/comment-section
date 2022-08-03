import React, { createContext, useContext } from 'react';

export const CommentsContext = createContext();

export function useAllComments() {
    return useContext(CommentsContext)
}

export function CommentsProvider({ children }) {

    const comments = [
        {
            author: "Rob Hope",
            commentData: "Hey I added a new Comment under my name",
            timestamp: new Date("1 August 2022"),
            upvotes: 0,
            unvotes: 0,
            replies: []
        }
    ]
    
    return (
        <CommentsContext.Provider value={comments}>
            {children}
        </CommentsContext.Provider>
    )
}