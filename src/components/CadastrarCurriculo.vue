<template>
  <Topo />
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Cadastre seu currículo gratuitamente!</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Sobrenome</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label" required>Email</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Telefone Celular</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">LinkedIn</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Site</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Remuneração</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">R$</span>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="salario"
            v-maska="'#,###.##'"
          />
        </div>
        <div class="form-text">Informe a Remuneração</div>
      </div>
      <div class="col">
        <label class="form-label">Tipo de contratação</label>
        <select class="form-select" v-model="tipo">
          <option value="1">PJ</option>
          <option value="2">CLT</option>
        </select>
        <div class="form-text">Informe o tipo da contratação</div>
      </div>
      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="1">Home Office</option>
          <option value="2">Híbrido</option>
          <option value="3">Presencial</option>
        </select>
        <div class="form-text">Informe a Modalidade</div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Topo from "../components/Topo.vue";
export default {
  name: "CADASTRARCURRICULO",
  components: { Topo },
};
</script>