<template>


  <h1>Create</h1>

  <form action="" @submit.prevent="addPost">

    <label for="">Title</label>
    <input type="text" required v-model="title">

    <label for="">Body</label>
    <textarea name="" id="" required v-model="body"></textarea>

    <label for="">Tags (hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.prevent.enter="handlekeydown">
    
    <div class="tagCard" v-for="tag in tags" :key="tag">{{ tag }}</div>

    <button>add post</button>
  </form>

</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        let router = useRouter(); //this.$router

        let title = ref('')
        let body = ref('')
        let tag = ref('')

        let tags = ref([])
        
        let handlekeydown = () => {
            // alert('key working')
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        let addPost = async () => {
            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: title.value,
                    body: body.value,
                    tags: tags.value
                })
            })
          //redirect to HomePage
          router.push('/')
        }

        return {title,body,tag, handlekeydown, tags, addPost}
    }

}
</script>

<style>
/* General Form Styling */
form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

/* Form Title */
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

/* Form Labels */
form label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
  font-size: 14px;
  color: #555;
}

/* Text Inputs and Textarea Styling */
form input[type="text"],
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

form input[type="text"]:focus,
form textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

/* Textarea Specific Styling */
form textarea {
  height: 100px;
  resize: vertical;
}

/* Button Styling */
form button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px 0;
}

form button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  form {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }
}

.tagCard {
  display: inline-block;
  padding: 6px 12px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: default;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.tagCard:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>