// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: "postApi",
    // fetchBaseQuery is just like axios to fetch data 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    // Now defining endpoints
    // here if you want to manipulate data then use mutataion or 
    // for just fetch data use query i.e builder.query
    endpoints: (builder) => ({

        // get all post endpoint
        getAllPost: builder.query({
            query: () => ({
                url: '/posts',
                // defining method
                method: "GET"
            })
        }),

        // get only one post based on ID
        getPostById: builder.query({
            query: (id) => {
                console.log("id from post.js", id)
                return {
                    url: `posts/${id}`,
                    method: "GET"
                }

            }
        }),

        // limit by specific number
        getPostByLimit: builder.query({
            query: (number) => {
                console.log("Number", number)
                return {
                    url: `posts?_limit=${number}`,
                    method: "GET"
                }
            }
        }),

        //delete endpoint RTK query
        deletePost: builder.mutation({
            query: (id) => {
                console.log("Delete ID", id)
                return {
                    url: `posts/${id}`,
                    method: "DELETE"
                }
            }
        }),

        // Create post 
        createPost: builder.mutation({
            query: (newPost) => {
                console.log('New Post', newPost)
                return {
                    url: `posts`,
                    method: "POST",
                    body: newPost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        })
    })

})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation } = postApi;