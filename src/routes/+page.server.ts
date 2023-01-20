import type { Actions } from "@sveltejs/kit";

import { prisma } from '$lib/server/prisma';

export const actions: Actions = {

   createArticle: async ({request}) => {

    const{ title, content } = Object.fromEntries(await request.formData()) as {title:string, content:string}

    try {

        await prisma.article.create({
            data:{
                title,
                content
            }
        })
        
    } catch (error) {
        console.log(error)
        return(error)
        
    }

    return{
        staus: 201
    }

   }

    
};