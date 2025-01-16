<template>
  <div class="home">

    <Nav>
      <Navbar></Navbar>
    </Nav>

    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>

    <div v-if="posts.length>0">
      <PostsList :posts="posts"></PostsList>
    </div>
    <div v-else class="loading">  <Spinner></Spinner>  </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts';

export default {
  components: {
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

</style>
