import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: {},
    loading: true,
    postLoad: false,
    sideBarLoad: false,
    isAdmin: false,
    allRequestPost: [],
    allApprovePost: [],
    blogs: [],
    count: 0,
    pageCount: 0,
    profileToggle: false,
    cheapTopRate: [],
    adminLastBlog: [],

}


export const saveUserToDb = createAsyncThunk(
    'saveUserToDb/user',
    async (info) => {
        const response = await axios.post(`https://end-game-server-production.up.railway.app/user`, info);
        return response.data
    }
)
export const putUserToDb = createAsyncThunk(
    'data/putUserToDb',
    async (info) => {
        const response = await axios.put(`https://end-game-server-production.up.railway.app/user`, info);
        return response.data
    }
)
export const makeAdmin = createAsyncThunk(
    'data/userAdmin',
    async (info) => {
        const response = await axios.put(`https://end-game-server-production.up.railway.app/user/makeAdmin`, info);
        return response.data
    }
)
export const isAdmin = createAsyncThunk(
    'data/isAdmin',
    async (info) => {
        const response = await axios.get(`https://end-game-server-production.up.railway.app/user/${info.email}`);
        return response.data
    }
)
export const requestForPost = createAsyncThunk(
    'data/requestForPost',
    async (info) => {
        const response = await axios.post(`https://end-game-server-production.up.railway.app/requestForPost`, info);
        return response.data
    }
)
export const findAllRequestPost = createAsyncThunk(
    'data/findAllRequestPost',
    async () => {
        const response = await axios.get(`https://end-game-server-production.up.railway.app/findAllRequestPost`);
        return response.data
    }
)
export const deletePost = createAsyncThunk(
    'data/deletePost',
    async (info) => {
        const response = await axios.delete(`https://end-game-server-production.up.railway.app/deletePost/${info._id}`);
        return response.data
    }
)
export const updateStatus = createAsyncThunk(
    'data/updateStatus',
    async (info) => {
        const response = await axios.put(`https://end-game-server-production.up.railway.app/updateStatus/${info._id}`);
        return response.data
    }
)
export const getAllApprovePost = createAsyncThunk(
    'data/getAllPost',
    async (info) => {
        const response = await axios.get(`https://end-game-server-production.up.railway.app/allApprovePost`);
        return response.data
    }
)
export const getBlogs = createAsyncThunk(
    'data/getBlogs',
    async (info) => {
        const response = await axios.get(`https://end-game-server-production.up.railway.app/getBlogs?size=${info.size}&page=${info.page}`);
        return response.data
    }
)
export const cheapTopRate = createAsyncThunk(
    'data/cheapTopRate',
    async (info) => {
        const response = await axios.get(`https://end-game-server-production.up.railway.app/getBlogs?size=${info.size}&page=${info.page}`);
        return response.data
    }
)
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setPostLoad: (state, action) => {
            state.postLoad = action.payload;
        },
        resetBlogs: (state, action) => {
            state.blogs = [];
        },
        handleProfileToggle: (state, action) => {
            state.profileToggle = !state.profileToggle;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(makeAdmin.fulfilled, (state, action) => {

            })
            .addCase(isAdmin.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(isAdmin.fulfilled, (state, action) => {
                state.isAdmin = action.payload.admin
                state.loading = false;
            })
            .addCase(isAdmin.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(requestForPost.pending, (state, action) => {
                state.postLoad = true;
            })
            .addCase(requestForPost.fulfilled, (state, action) => {
                state.postLoad = false;

            })
            .addCase(findAllRequestPost.pending, (state, action) => {
                state.postLoad = true;
            })
            .addCase(findAllRequestPost.rejected, (state, action) => {
                state.postLoad = false;
            })
            .addCase(findAllRequestPost.fulfilled, (state, action) => {

                state.allRequestPost = action.payload;
                state.postLoad = false;
            })
            .addCase(deletePost.fulfilled, (state, action) => {

                state.allRequestPost = state?.allRequestPost?.filter(post => post._id !== action.payload._id)
                state.allApprovePost = state?.allApprovePost?.filter(post => post._id !== action.payload._id)
            })
            .addCase(updateStatus.fulfilled, (state, action) => {

                const updatePost = state.allRequestPost.filter(post => post._id === action.payload._id)
                updatePost[0].status = 'approve';


            })
            .addCase(getAllApprovePost.pending, (state, action) => {
                state.postLoad = true;
            })
            .addCase(getAllApprovePost.rejected, (state, action) => {
                state.postLoad = false;
            })
            .addCase(getAllApprovePost.fulfilled, (state, action) => {

                state.allApprovePost = action.payload;
                state.postLoad = false;
            })
            .addCase(getBlogs.pending, (state, action) => {
                state.postLoad = true;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.postLoad = false;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {

                state.blogs = action.payload.blogs;
                const count = action.payload.count
                state.count = count;
                state.pageCount = Math.ceil(count / 10);
                state.postLoad = false;
            })
            .addCase(cheapTopRate.fulfilled, (state, action) => {

                const blogs = action.payload.blogs;
                const reSize = () => {
                    for (let t = 0; t < blogs.length; t++) {
                        for (let i = 0; i < blogs.length; i++) {
                            const itCost = parseInt(blogs[t].total_cost)
                            const nextCost = parseInt(blogs[i]?.total_cost)

                            if (itCost < nextCost) {
                                [blogs[i], blogs[t]] = [blogs[t], blogs[i]]

                            }

                        }

                    }
                }
                reSize();
                const tenCheap = blogs.slice(0, 10);
                const topRate = () => {
                    for (let t = 0; t < tenCheap.length; t++) {
                        for (let i = 0; i < tenCheap.length; i++) {
                            const itRate = blogs[t].rating
                            const nextRate = blogs[i]?.rating
                            if (itRate < nextRate) {
                                [blogs[i], blogs[t]] = [blogs[t], blogs[i]]

                            }

                        }

                    }
                }
                topRate();
                state.adminLastBlog = blogs.filter(ele => ele.admin === true).slice(0, 5);


                //set state
                state.cheapTopRate = tenCheap;


            })

    }
})
// Action creators are generated for each case reducer function
export const { login, logout, setLoading, handleProfileToggle, resetBlogs, setPostLoad } = dataSlice.actions
export const selectData = (state) => state.data;
export default dataSlice.reducer