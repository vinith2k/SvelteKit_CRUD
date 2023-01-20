import { fail, type Actions } from "@sveltejs/kit";
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from "./$types";

//Fetch Article

export const load: PageServerLoad = async () => {

    return{
        articles: await prisma.article.findMany(),
    }
    
};

// Create Article

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

   },

   deleteArticle: async ({ url }) => {
    const id = url.searchParams.get("id")
    if (!id) {
        return fail(400, { message: "Invalid request" })
    }

    try {
        await prisma.article.delete({
            where: {
                id: Number(id),
            },
        })
    } catch (err) {
        console.error(err)
        return fail(500, {
            message: "Something went wrong deleting your article",
        })
    }

    return {
        status: 200,
    }
},

    
};