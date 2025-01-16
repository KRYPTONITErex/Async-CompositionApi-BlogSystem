<template>

    <div class="post">

        <router-link :to="{name:'Detail',params:{id:post.id}}">
        <h2>{{ post.title }}</h2>
        
        </router-link>

        <p>{{ cutPostBody }}</p>

        <div class="tagCard" v-for="tag in post.tags" :key="tag">{{ tag }}</div>
    </div>

   

</template>


<script>
import { computed } from 'vue';

export default {

    props: ['post'],

    setup(props) {
        let cutPostBody = computed(()=>{
            return props.post.body.substring(0, 100)+'...'
        })

        return {cutPostBody}
    }
}
</script>

<style>
.post {
  background-color: #f9f9f9; /* Light gray background */
  padding: 20px;
  margin: 15px auto;
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  max-width: 600px; /* Restrict width */
  transition: box-shadow 0.3s ease;
}

.post:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow on hover */
}

.post h2 {
  font-size: 1.5rem; /* Title size */
  color: #007bff; /* Blue text for links */
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.post h2:hover {
  color: #0056b3; /* Darker blue on hover */
}

.post p {
  font-size: 1rem; /* Body text size */
  color: #555; /* Dark gray for better readability */
  line-height: 1.6; /* Improved readability */
  margin-top: 10px;
}

.post a {
  text-decoration: none; /* Remove underline for links */
}

</style>