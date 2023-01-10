<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Sham1ko</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/test">Test</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- <template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="/">Main</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">about</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/test">test</a>
    </li>
  </ul>
</template> -->
<style></style>
