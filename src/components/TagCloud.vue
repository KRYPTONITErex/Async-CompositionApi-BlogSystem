<template>

    <div class="tagCloud-sector">
        <h1>tagcloud</h1>

        <div class="tagCard"  v-for="tag in uniqueTags" :key="tag">
            <router-link :to="{name:'Tag',params:{tag}}">{{ tag }}</router-link>
        </div>

    </div>
  
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['posts'],
    setup(props) {
        let tags = ref([])
        props.posts.forEach((post)=>{
            // console.log(post.tags)
            post.tags.forEach((tag)=>{
                // console.log(tag)
                tags.value.push(tag)
            })
        })

        // console.log(tags.value)
        let uniqueTags = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index
        })
        // console.log(uniqueTags)

        return {uniqueTags}
    }

}
</script>


<style scoped>

.tagCloud-sector {
    text-align: right; /* Align the entire tag section to the right */
    margin-top: 100px;
    padding-right: 20px;
    background-color: #f0f0f0; /* Soft light gray background */
    padding: 20px;
    border-radius: 10px; /* Rounded corners for the box */
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for the box */
    border: 1px solid #e0e0e0; /* Very light border for the box */
}

.tagCard {
    display: inline-block;
    margin: 8px; /* Equal spacing around tags */
    padding: 8px 16px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500; /* Slightly lighter font weight for a softer feel */
    color: #363636; /* Soft gray text */
    background-color: #aebed0; /* Soft muted blue-gray background */
    border-radius: 20px; /* Rounded button style */
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
    cursor: pointer;
}

.tagCard:hover {
    background-color: #c9d4e2; /* Slightly darker muted blue-gray on hover */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

.tagCard:active {
    background-color: #102a45; /* Even darker muted blue-gray when active */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow when clicked */
}

</style>