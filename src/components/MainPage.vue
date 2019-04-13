<template>
    <div>
        <section class="hero is-info is-medium is-bold is-success">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Женечкин блог</h1>
                    <p class="subtitle">Читайте и завидуйте</p>
                </div>
            </div>
        </section>
        <div class="blog-block">
            <section class="articles">
                <div class="card article column is-8 is-offset-2" v-for="post in posts" v-bind:key="post.id">
                    <div class="card-content">
                        <p class="title article-title">
                            <a :href="`/post/${post.id}`">{{post.title}}</a>
                        </p>
                        <p class="article-title">{{post.text}}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage",
        data(){
            return{
                test: this.$store.state.test,
            }
        },
        computed:{
            posts (){return  this.$store.state.posts}
        },
        mounted() {
            //Загрузка постов
            this.$store.dispatch('getAllPosts').then()
        }
    }
</script>

<style scoped>
    .blog-block{
        position: relative;
        margin-top: -100px;

    }
    .blog-post{
        margin-bottom: 30px;
    }

</style>