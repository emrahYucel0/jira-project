<template>
    <div>
        <form @submit.prevent="handleSubmit()">
            <label>Başlık</label>
            <input type="text" v-model="title" required>
            <label>İş Detayı</label>
            <textarea v-model="details" required></textarea>
            <button>Güncelle</button>
        </form>       
    </div>
</template>
<script>
export default {
    name: 'EditTaskView',
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            complete: false,
            uri: 'http://localhost:3000/tasks/' + this.id,
        }
    },
    methods: {
        handleSubmit(){
            fetch(this.uri, {method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    title: this.title,
                    description: this.details,
                    complete: this.complete
                })
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch(err => console.log(err.message))
        }
    },
    mounted() {
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
        this.title = data.title;
        this.details = data.description;
        this.complete = data.complete;
    })
    .catch(err => console.log(err.message))
  },
}
</script>
<style>
    
</style>