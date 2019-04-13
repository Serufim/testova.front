import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test:"azaza",
        posts:[]
    },
    mutations:{
        setPosts (state, payload) {
            state.posts = payload
        },
        addComment(state, payload){
            let post = state.posts
            post.comments.push({"name":payload.aaa,email:payload.email,text:payload.text})
            state.posts = post
        }
    },
    actions:{
        getAllPosts({commit}){
            //Берем посты
            axios.get('http://localhost:8000/get-all-posts').then(resp=>{
                commit('setPosts',resp.data)
            }).catch(()=>{console.log("Все пропало")})
        },
        getPostByID({commit},{id}){
            //Берем пост
            axios.get(`http://localhost:8000/get-post/${id}`).then(resp=>{
                commit('setPosts',resp.data)
            }).catch(()=>{console.log("Все пропало")})
        },
        sendComment({commit},{aaa,email,text,post}){
            axios.post('http://localhost:8000/send-comment',{"name":aaa,email,text,post}).then(()=>{
                commit('addComment',{aaa,email,text})
                })
        }
    }
})