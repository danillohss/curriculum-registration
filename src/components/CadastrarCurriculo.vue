<template>
  <Topo />
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Cadastre seu currículo gratuitamente!</h4>
        <br />
        <h5>Dados pessoais</h5>
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
        <input type="text" class="form-control" v-maska="'(##) # ####-####'" />
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
    <br />
    <h5>Experiência</h5>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Nome da Empresa</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Cargo ocupado</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="startDate">Inicio</label>
        <input
          id="startDate"
          class="form-control"
          type="date"
          v-model="dataInicio"
        />
      </div>
      <div class="col">
        <label for="startDate">Fim</label>
        <input
          id="startDate"
          class="form-control"
          type="date"
          v-model="dataFim"
          :disabled="checkBoxAtual"
        />
      </div>
      <div class="col">
        <div class="form-check">
          <br />
          <label class="form-check-label"> Atualmente trabalho aqui </label>
          <input
            class="form-check-input"
            type="checkbox"
            v-model="checkBoxAtual"
          />
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Ultima remuneração</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">R$</span>
          </div>
          <input type="text" class="form-control" v-maska="'#,###.##'" />
        </div>
        <div class="form-text">Informe a Remuneração</div>
      </div>
      <div class="col">
        <label class="form-label">Tipo de contratação</label>
        <select class="form-select">
          <option value="1">PJ</option>
          <option value="2">CLT</option>
        </select>
        <div class="form-text">Informe o tipo da contratação</div>
      </div>
      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select">
          <option value="1">Home Office</option>
          <option value="2">Híbrido</option>
          <option value="3">Presencial</option>
        </select>
        <div class="form-text">Informe a Modalidade</div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Topo from "../components/Topo.vue";
export default {
  name: "CADASTRARCURRICULO",
  components: { Topo },
  data: () => ({
    checkBoxAtual: false,
    dataFim: null,
  }),
  watch: {
    checkBoxAtual() {
      if (this.checkBoxAtual) {
        this.dataFim = null;
      }
    },
  },
};
</script>