<template>
  <div class="home">

    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>

    <div class="layout" v-if="posts.length>0">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>

      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else class="loading">  <Spinner></Spinner>  </div>

  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts';

export default {
  components: {
    TagCloud,
    Navbar,
    Spinner, PostsList },
  setup() {

    let {posts,error,load} = getPosts()
    
    load()

    return {posts,error}

    // let { name,age } = { name:'John',age:30 }
    // console.log(name,age)
  }
} 
</script>

<style>

.loading{
    margin-top: 10px;
    text-align: center;
}

.layout{
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 20px;
}

</style>
