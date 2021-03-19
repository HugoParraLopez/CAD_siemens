<template>
    <div class="my-card">
        DOCUMENTOS <br><br>
        <ul>
            <div class="alert alert-info">
                <p class="file-tile">Garantias</p><button class="btn btn-success">Abrir</button>
            </div>
            <div class="alert alert-info">
                <p class="file-tile">Esquematico de Interruptor</p><button class="btn btn-success">Abrir</button>
            </div>
            <div class="alert alert-info">
                <p class="file-tile">Manual de usuario</p><button class="btn btn-success">Abrir</button>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>  
    .file-tile {
        display: inline-block !important;
        margin: 2px 5px;
    }
</style>