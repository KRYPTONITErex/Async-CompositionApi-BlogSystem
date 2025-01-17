<template>
    <div class="tag">

        <div v-if="error">{{ error }}</div>

        <div v-if="posts.length" class="layout">   
            <div>
                <PostsList :posts="filteredPosts"></PostsList>
            </div>

            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>

        <div> <Spinner></Spinner> </div>

    </div>

 

</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts';

export default {
  components: {
    TagCloud, PostsList },
    props: ['tag'],
    setup(props) {
        // console.log(props.tag)
        let {posts,error,load} = getPosts()
        load()

        let filteredPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })

        return {posts,error,filteredPosts}

    }

}
</script>

<style>

.tagCard{
    display: inline-block;
    margin-right: 15px; /* Spacing between links */
    padding: 10px 18px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    color: #fff; /* White text */
    background-color: #007bff; /* Blue background */
    border-radius: 20px; /* Rounded button style */
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

a{
    text-decoration: none;
    color: #fff;
}

.tag{
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    ;
}


</style>