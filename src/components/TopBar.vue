<template>
    <div class="my-nav">
        <nav class="navbar navbar-expand-lg" style="background-color: #38206A">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand nav-main-item" href="#">
                <span id="logo"><siemens-logo/></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
import siemensLogo from './SiemensLogo'
export default {
    data() {
        return {
            
        }
    },
    components: {
        siemensLogo: siemensLogo
    }
}
</script>

<style>
.nav-main-item {
    display: inline-block;
}
span#logo {
    width: 50%;
    height: 100%;
    margin-left: 2%;
}
</style>