const { ref } = require("vue")

let getPost = (id)=>{
    let post = ref(null);
    let error = ref('')

    let load = async ()=>{

        await new Promise((resolve,reject)=>{
            setTimeout(()=>{ resolve() },1000)
        })

        try {
        let res =  await fetch('http://localhost:3000/posts/' + id)
        if(res.status === 404){
            throw new Error(' 404 , Resource not found')
        }
        let data = await res.json()
        post.value = data
        }
        catch (err) {
            error.value = err.message
        }

    }

    return {post,error,load}

}

export default getPost