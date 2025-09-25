<template>
  <h1>Lista de animales</h1>
  <div id="card">
    <h3>Nuevo animal</h3>
    <input
      type="text"
      placeholder="Escribe un animal"
      v-model="nuevoAnimal">
    <br>
    <button id="btnAdd">Agregar</button>
  </div>

  <br>

  <div id="card">
    <h4>Animales</h4>
    <p v-for="(animal, i) in animales" :key="i">{{ animal }}</p>
  </div>
</template>

<script>
export default {
  name: 'AnimalesList',
  data(){
    return {
      animales: [],
      nuevoAnimal: ''
    }
  },
  methods: {
    agregarAnimal(){
      if (this.nuevoAnimal?.trim()) {
        this.animales.push(this.nuevoAnimal.trim())
        this.nuevoAnimal = ''
      }
    }
  },
  beforeCreate(){
    alert('Inicia la creación del componente')
  },
  created(){
    console.log('Componente creado')
    const guardados = ['Jirafa','León']
    guardados.forEach(a => this.animales.push(a))
  },
  beforeMount(){
    alert('El componente está cerca de renderizar')
  },
  mounted(){
    console.log('El componente se ha renderizado')
    const btnAdd = document.getElementById('btnAdd')
    if (btnAdd) btnAdd.addEventListener('click', this.agregarAnimal)
  },
  beforeUpdate(){
    alert('El componente ha sufrido un cambio en las propiedades o estado')
  },
  updated(){
    console.log('El componente se ha actualizado y el DOM ha sido modificado')
  },
  beforeUnmount(){
    alert('El componente iniciará a desmontarse')
  },
  unmounted(){
    console.log('El componente ha sido desmontado')
  }
}
</script>

<style scoped>
#card {
  border: 1px solid yellowgreen;
  border-radius: 40px;
  margin: auto;
  width: 50%;
  padding: 20px;
}
button{
  border: 1px solid darkolivegreen;
  width: 180px;
  padding: 10px;
  margin: 20px;
  background-color: yellowgreen;
  border-radius: 40px;
  color: black;
}
</style>
