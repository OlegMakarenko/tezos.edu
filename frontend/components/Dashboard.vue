<template>
  <div class="dashboard">
    <StudentCard 
      v-for="(item, index) in students"
      :name="item.name"
      :score="item.score"
      :id="item.id"
      :key="'st'+item.name+index"
      @click="openStudent" 
    />
  </div>
  
</template>



<script>
import Axios from 'axios';
import StudentCard from './StudentCard.vue'

export default {
  
  components: { 
    StudentCard 
  },
  mounted(){
    this.getStudents()
  },
  data () {
    return { 
      students: []
    }
  },

  computed:{

  },

  methods:{
    getStudents() {
      Axios.get('http://localhost:7071/get_students')
        .then(res => this.$set(this, "students", res.data))
        .catch(err => console.error(err))
    },

    openStudent(id) {
      this.$router.push({ name: 'student', params: { id } })
      console.log(id)
    }
  } 
}


</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

}

</style>
