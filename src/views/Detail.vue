<template>


    
    <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>

</template>

<script>
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost';
import { useRoute } from 'vue-router';
export default {
  components: {
    Navbar, Spinner },
    props: ['id'], //this.$route.params.id

    setup(props){

        let route = useRoute();
        // console.log(route.params.id)

        let {post,error,load} = getPost(route.params.id)
        load()

        return {post,error}
    }

}
</script>

<style>

</style>