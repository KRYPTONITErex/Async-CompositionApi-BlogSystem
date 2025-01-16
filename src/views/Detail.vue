<template>

    <Navbar></Navbar>
    
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
export default {
  components: {
    Navbar, Spinner },
    props: ['id'],

    setup(props){

        let {post,error,load} = getPost(props.id)
        load()

        return {post,error}
    }

}
</script>

<style>

</style>