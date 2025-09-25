<template>
  <h1>Calculadora</h1>
  <div id="card">
    <table>
      <tr>
        <td>Operación</td>
        <td>
          <select v-model.number="operacion">
            <option v-for="(op, i) in operaciones" :key="i" :value="op.id">
              {{ op.nombre }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Número 1</td>
        <td><input type="number" v-model.number="numero1"></td>
      </tr>
      <tr>
        <td>Número 2</td>
        <td><input type="number" v-model.number="numero2"></td>
      </tr>
      <tr>
        <td colspan="2">
          <hr>
          <button @click="calcular">Calcular</button>
        </td>
      </tr>
    </table>
  </div>

  <br>

  <div id="card">
    <h4>Respuesta: {{ resultado }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CalculadoraView',
  data(){
    return {
      operaciones: [],
      resultado: 0,
      operacion: 1,
      numero1: 0,
      numero2: 0
    }
  },
  methods: {
    calcular(){
      if (this.operacion === 1) {
        this.resultado = (this.numero1 ?? 0) + (this.numero2 ?? 0)
      } else if (this.operacion === 2) {
        this.resultado = (this.numero1 ?? 0) - (this.numero2 ?? 0)
      }
    }
  },
  mounted(){
    this.operaciones.push({ id: 1, nombre: 'Suma' })
    this.operaciones.push({ id: 2, nombre: 'Resta' })
  },
  watch: {
    operacion(nuevo, viejo){ if (nuevo !== viejo) this.calcular() },
    numero1(nuevo, viejo){ if (nuevo !== viejo) this.calcular() },
    numero2(nuevo, viejo){ if (nuevo !== viejo) this.calcular() }
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
  width: 100%;
  padding: 10px;
  background-color: yellowgreen;
  color: black;
}
table { margin: auto; }
select { width: 100%; }
</style>
