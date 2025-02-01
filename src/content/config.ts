import { defineCollection, z } from "astro:content";

// z --> zod schema 

const projects = defineCollection({
    schema : z.object({
        title: z.string(),
        project_type: z.string(),
        img: z.string(),
        description: z.string(),
        technologies: z.string(),
        img_aspect: z.string(),
        background: z.string().optional(),
        position: z.string(),
        link: z.string().url().optional(),
        order: z.number()
    }),
})

export const collections = {projects}