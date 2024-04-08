<template>
  <nav>
    <div class="vertical-nav">
      <div class="nav-item">
        <a href="#hero"><i class="fas fa-user"></i></a>
      </div>
      <div class="bar"></div>
      <div class="nav-item">
        <a href="#portfolio"><i class="fas fa-briefcase"></i></a>
      </div>
      <div class="bar"></div>
      <div class="nav-item">
        <a href="#contact"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
<style>
.vertical-nav {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  margin-bottom: 20px;
}

.bar {
  width: 2px;
  height: 40px; /* Ajustez la hauteur selon vos préférences */
  background-color: #ccc; /* Couleur de la barre */
}

.nav-item a {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}

.nav-item a:hover {
  background-color: #555;
}
</style>
