<template>
  
    <nav-bar>
      <router-link to="/" class="NavBar">Home</router-link>
      <router-link to="/create" class="NavBar">Create</router-link>
    </nav-bar>

</template>

<script>
export default {

}
</script>

<style>
.NavBar {
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

.NavBar:hover {
  background-color: #0056b3; /* Darker blue on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

.NavBar:active {
  background-color: #003f8f; /* Even darker blue when active */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Inner shadow on active */
}
</style>
