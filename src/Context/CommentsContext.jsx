import React, { createContext, useContext } from 'react';

export const CommentsContext = createContext();

export function useAllComments() {
    return useContext(CommentsContext)
}

export function CommentsProvider({ children }) {

    const comments = [
        {
            author: "Rob Hope",
            commentData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur veniam mollitia voluptatum nemo vero repellendus, adipisci ratione officia, quo dolorem. Vel beatae perferendis autem, dicta corporis, labore nemo quasi minima similique aperiam, sequi possimus sed. Rem repudiandae alias modi amet autem voluptatum deleniti laboriosam porro quod rerum. Facilis temporibus iure eos atque dignissimos dolore culpa. Maxime sequi eius earum ipsam odit, cumque fugiat sed corrupti officia veritatis facilis temporibus architecto omnis dicta commodi enim! Maiores quas id dicta, totam eum asperiores ad animi, doloribus non repellat pariatur hic similique explicabo ab itaque. Voluptatum vel corrupti laborum voluptates ipsam ipsum!",
            timestamp: new Date("1 August 2022"),
            upvotes: 0,
            unvotes: 0,
            replies: []
        },
        {
            author: "Bob Hope",
            commentData: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quisquam iure nemo non! Ab obcaecati accusamus fugit hic consequuntur praesentium, aliquam nihil, explicabo neque quidem dolor magni incidunt, molestiae corporis. Recusandae quam quidem inventore neque facere. Perferendis rem aliquam corrupti molestiae porro quam commodi magnam! Rem in, necessitatibus blanditiis ex veniam modi nam beatae laudantium ullam magni dolorem nesciunt odio corrupti dolore nulla reiciendis fuga? Ab at itaque veniam! Rem.",
            timestamp: new Date("1 August 2022"),
            upvotes: 0,
            unvotes: 0,
            replies: []
        },
        {
            author: "Mob Tope",
            commentData: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae cupiditate, eius maxime aliquid exercitationem nesciunt quia, nostrum dolore dolor fugit velit ad consequuntur minus eaque alias assumenda suscipit molestiae laborum tempora! Autem officiis at animi vero ipsum, nesciunt iure nemo nihil consequuntur distinctio quidem dicta odio recusandae hic optio. Possimus magnam excepturi omnis exercitationem, nostrum animi illum dolorum rem voluptas necessitatibus? Praesentium dolore autem aliquam ab velit tempora harum iure labore? Est suscipit odio molestiae natus, et reprehenderit cupiditate?",
            timestamp: new Date("1 August 2022"),
            upvotes: 0,
            unvotes: 0,
            replies: []
        },
    ];
    
    return (
        <CommentsContext.Provider value={comments}>
            {children}
        </CommentsContext.Provider>
    )
}