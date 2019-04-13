<template>
    <div>
        <section class="hero is-primary is-bold">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <router-link to="/" class="navbar-item">Женечкнин блог</router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
        <div class="container content is-large " v-if="post">
            <h1 class="title has-text-centered post-title">{{post.title}}</h1>
            <div class="text" v-html="post.text"></div>
        </div>
        <div class="container">
            <h3 class="title is-3">Комментарии</h3>
            <div class="box" v-for="comment in post.comments" v-bind:key="comment.id">
                <p class="has-text-info">{{comment.name}}</p>
                {{comment.text}}
            </div>
            <form v-on:submit.prevent="onSubmit()" class="box column is-4">
                <h3>Напиши коммент, будь умницей!</h3>
                <div class="field ">
                    <div class="field-label is-normal">
                        <label class="label has-text-left">Имя</label>
                    </div>
                    <div class="field-body">
                        <div class="control">
                            <input v-model="aaa" class="input" type="text">
                        </div>
                    </div>
                </div>
                <div class="field ">
                    <div class="field-label is-normal">
                        <label class="label has-text-left">Почт@</label>
                    </div>
                    <div class="field-body">
                        <div class="control">
                            <input v-model="mail" class="input" type="text">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="field-label is-normal">
                        <label class="label has-text-left">Коментарий</label>
                    </div>
                    <div class="field-body">
                        <div class="control">
                            <textarea v-model="comment" class="textarea"></textarea>
                        </div>
                    </div>
                </div>
                <button class="button is-primary" type="submit">Отправиить</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['id'],
        data(){
            return {
                aaa:"",
                mail:"",
                comment:""
            }
        },
        mounted() {
            this.$store.dispatch('getPostByID',{id:this.id})
        },
        computed:{
            post(){
                return this.$store.state.posts
            },
            comments(){
                return this.$store.state.posts
            }
        },
        methods:{
            onSubmit(){
                this.$store.dispatch('sendComment',{
                    aaa:this.aaa,
                    email:this.mail,
                    text: this.comment,
                    post: this.id
                })
            }
        }
    }
</script>

<style scoped>
    .post-title{
        margin-top: 0.5em;
    }
    .control{
        width: 100%;
    }
</style>