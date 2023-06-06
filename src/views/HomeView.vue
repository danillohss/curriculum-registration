<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Menu</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Cadastrar Currículo</a>
            <a class="nav-link" href="#">Meus Currículos</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
