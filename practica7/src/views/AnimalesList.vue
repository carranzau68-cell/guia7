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
    console.log('Inicia la creación del componente')
  },
  created(){
    console.log('Componente creado')
    const guardados = ['Jirafa','León']
    guardados.forEach(a => this.animales.push(a))
  },
  beforeMount(){
    console.log('El componente está cerca de renderizar')
  },
  mounted(){
    console.log('El componente se ha renderizado')
    this._btnAdd = document.getElementById('btnAdd')
    if (this._btnAdd) this._btnAdd.addEventListener('click', this.agregarAnimal)
  },
  beforeUpdate(){
    console.log('Cambió el estado/props (beforeUpdate)')
  },
  updated(){
    console.log('DOM actualizado (updated)')
  },
  beforeUnmount(){
    if (this._btnAdd) this._btnAdd.removeEventListener('click', this.agregarAnimal)
    console.log('Se va a desmontar (beforeUnmount)')
  },
  unmounted(){
    console.log('Se desmontó (unmounted)')
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
